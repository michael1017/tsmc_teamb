import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'
import { establishConnection } from './plugins/mongodb'
import { FormRouter } from './route/form'

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
  logger: { prettyPrint: true }
})

const startFastify: (port: number) => FastifyInstance<Server, IncomingMessage, ServerResponse> = (port) => {
  server.register(require('fastify-cors'), {})
  server.listen(port, (err, _) => {
    if (err) {
      console.error(err)
    }
    establishConnection()
  })

  server.get('/ping', async (request: FastifyRequest, reply: FastifyReply) => {
    return reply.status(200).send({ msg: 'pong' })
  })

  server.register(FormRouter, { prefix: '/api' })

  return server
}

export { startFastify }
