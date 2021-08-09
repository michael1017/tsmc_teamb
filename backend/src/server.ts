import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'
import { establishConnection } from './plugins/mongodb'
import { FormRouter } from './route/form'
import fastifySwagger from 'fastify-swagger'

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
  logger: { prettyPrint: true }
})

const startFastify: (port: number) => FastifyInstance<Server, IncomingMessage, ServerResponse> = (port) => {
  server.register(require('fastify-cors'), {})
  server.listen(port, '0.0.0.0', (err, _) => {
    if (err) {
      console.error(err)
    }
    establishConnection()
  })

  server.get('/ping', async (request: FastifyRequest, reply: FastifyReply) => {
    return reply.status(200).send({ msg: 'pong' })
  })

  server.register(FormRouter, { prefix: '/api' })

  server.register(fastifySwagger, {
    mode: 'static',
    routePrefix: '/documentation',
    exposeRoute: true,
    specification: {
      path: 'docs/ithelp.yaml',
      postProcessor: (_) => _,
      baseDir: ''
    }
  })

  return server
}

export { startFastify }
