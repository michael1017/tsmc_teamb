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
    username: string
  }

  server.get('/forms', opts, async (request, reply) => {
    try {
      const forms: Array<IForm> = await formRepo.getForms()
      return reply.status(200).send({ forms })
    } catch (error) {
      console.error(`GET /forms Error: ${error}`)
      return reply.status(500).send(`[Server Error]: ${error}`)
    }
  })

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

  server.post<{ Params: IdParam }>('/forms/:id', opts, async (request, reply) => {
    try {
      const formid = request.params.id
      const formBody: IRecord = request.body as IRecord
      formBody.formid = formid
      const record: IRecord = await recordRepo.addRecord(formBody)

      return reply.status(201).send({ record })
    } catch (error) {
      console.error(`POST /forms${request.params.id} Error: ${error}`)
      return reply.status(500).send(`[Server Error]: ${error}`)
    }
  })

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
