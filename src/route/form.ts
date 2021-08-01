import { FastifyInstance, RouteShorthandOptions, FastifyReply } from 'fastify'
import { IForm } from '../types/form'
import { FormRepoImpl } from './../repo/form-repo'
import { IRecord } from '../types/maintain_record'
import { RecordRepoImpl } from '../repo/maintain_record-repo'


const FormRouter = (server: FastifyInstance, opts: RouteShorthandOptions, done: (error?: Error) => void) => {
  const formRepo = FormRepoImpl.of()
  const recordRepo = RecordRepoImpl.of()

  interface IdParam {
    id: string
  }
  interface UsParam {
    username:string
  }

  //查看所有報修單
  server.get('/forms', opts, async (request, reply) => {
    try {
      const forms: Array<IForm> = await formRepo.getForms()
      return reply.status(200).send({ forms })
    } catch (error) {
      console.error(`GET /forms Error: ${error}`)
      return reply.status(500).send(`[Server Error]: ${error}`)
    }
  })

  //查看所有同username的報修單
  server.get<{ Params: UsParam }>('/forms/username=:username', opts, async (request, reply) => {
    try {
      const username = request.params.username
      const forms: Array<IForm> = await formRepo.getFormsbyusername(username)
      return reply.status(200).send({ forms })
    } catch (error) {
      console.error(`GET /forms/username=${request.params.username} Error: ${error}`)
      return reply.status(500).send(`[Server Error]: ${error}`)
    }
  })

  //查看某報修單與它所有的維修紀錄
  server.get<{ Params: IdParam }>('/forms/:id', opts, async (request, reply) => {
    try {
      const formid = request.params.id
      const form: IForm | null = await formRepo.getForm(formid)
      const records: Array<IRecord> = await recordRepo.getRecord(formid)
      return reply.status(200).send({ form, records })
    } catch (error) {
      console.error(`GET /forms/${request.params.id} Error: ${error}`)
      return reply.status(500).send(`[Server Error]: ${error}`)
    }
  })

  //新增報修單
  server.post('/forms', opts, async (request, reply) => {
    try {
      const formBody: IForm = request.body as IForm
      const form: IForm = await formRepo.addForm(formBody)
      return reply.status(201).send({ form })
    } catch (error) {
      console.error(`POST /forms Error: ${error}`)
      return reply.status(500).send(`[Server Error]: ${error}`)
    }
  })

  //新增某報修單的維修紀錄(每筆維修紀錄新增時皆會有一個維修紀錄自己的time stamp，但並不會更新報修單的time stamp)
  server.post<{ Params: IdParam }>('/forms/:id', opts, async (request, reply) => {
    try {
      const formid = request.params.id
      const formBody: IRecord = request.body as IRecord
      formBody.formid = formid
      const record: IRecord = await recordRepo.addRecord(formBody)
      
      return reply.status(201).send({record})
    } catch (error) {
      console.error(`POST /forms${request.params.id} Error: ${error}`)
      return reply.status(500).send(`[Server Error]: ${error}`)
    }
  })

  //更新某報修單狀態(報修單的time stamp只會在這時候更新)
  server.put<{ Params: IdParam }>('/forms/:id', opts, async (request, reply) => {
    try {
      const id = request.params.id
      const formBody = request.body as IForm
      const form: IForm | null = await formRepo.updateForm(id, formBody)
      if (form) {
        return reply.status(200).send({ form })
      } else {
        return reply.status(404).send({ msg: `Not Found Form:${id}` })
      }
    } catch (error) {
      console.error(`PUT /forms/${request.params.id} Error: ${error}`)
      return reply.status(500).send(`[Server Error]: ${error}`)
    }
  })

  //刪除報修單(維修紀錄會在被同時刪除)
  server.delete<{ Params: IdParam }>('/forms/:id', opts, async (request, reply) => {
    try {
      const id = request.params.id
      const form: IForm | null = await formRepo.deleteForm(id)
      const record: IRecord | null = await recordRepo.deleteRecord(id)
      if (form) {
        return reply.status(204).send()
      } else {
        return reply.status(404).send({ msg: `Not Found Form:${id}` })
      }
    } catch (error) {
      console.error(`DELETE /forms/${request.params.id} Error: ${error}`)
      return reply.status(500).send(`[Server Error]: ${error}`)
    }
  })

  done()
}

export { FormRouter }
