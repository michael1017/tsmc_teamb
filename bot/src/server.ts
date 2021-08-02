import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'
import util from 'util'
import * as API from './API'
import { IForm } from './types/form'

type WebHookRequest = {
  responseId: string
  queryResult: {
    queryText: string
    action: string
    parameters: any
    outputContexts:[
      {
        name: string
        parameters: {
          phone: string
          category: string
        }
      },
      {
        name: string
        parameters: {
          category: string
          phone: string,
          id: string
          department:string
          user_question:string
        }
      }
    ]

    intent: {
      name: string
      displayName: string
    }

  }

  originalDetectIntentRequest: {
    source: string
    payload: {
      data: {
        chat: {
          id: string
          type: string
        }
        from: {
          username: string
          first_name: string
          id: number
        }
        date: number
        message_id: number
      }
    }
  }
}

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
  logger: { prettyPrint: true }
})

const startFastify: (port: number) => FastifyInstance<Server, IncomingMessage, ServerResponse> = (port) => {
  server.listen(port, (err, _) => {
    if (err) {
      console.error(err)
    }
  })

  server.get('/ping', async (request: FastifyRequest, reply: FastifyReply) => {
    return reply.status(200).send({ msg: 'pong' })
  })

  server.post('/webhook', async (request: FastifyRequest, reply: FastifyReply) => {
    const data = request.body as WebHookRequest
    console.log('request body = ', util.inspect(data, true, null))
    const intent = data.queryResult.intent.displayName
    if (intent === 'confirm_intent_y') {
      const departname = data.queryResult.outputContexts[1].parameters.department
      const userid = data.queryResult.outputContexts[1].parameters.id
      const phone = data.queryResult.outputContexts[1].parameters.phone
      const description = data.queryResult.outputContexts[1].parameters.user_question
      const username = data.originalDetectIntentRequest.payload.data.from.first_name || ''
      console.log('username = ', username)
      // call Backend API to create the form
      const formBody: IForm = {
        userprofile:
        {
          username,
          departname,
          userid,
          phone
        },
        description,
        status: 'new',
      }

      try {
        const {
          data: { form }
        }: IForm | any = await API.addForm(formBody)
        const response = {
          fulfillmentMessages: [
            {
              text: {
                text: [`好的，已經為 ${userid} 報案了, 報修單號： ${form._id}`]
              }
            }
          ]
        }
        return reply.status(200).send(response)
      } catch (error) {
        const response = {
          fulfillmentMessages: [
            {
              text: {
                text: [`系統錯誤，請稍後再試`]
              }
            }
          ]
        }
        return reply.status(200).send(response)
      }
    }

    // default response
    const response = {
      fulfillmentMessages: [
        {
          text: {
            text: ['Text response from webhook']
          }
        }
      ]
    }
    return reply.status(200).send(response)
  })

  return server
}

export { startFastify }
