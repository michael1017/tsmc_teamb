import { startFastify } from './server'

// Start your server
const port = process.env.FASTIFY_PORT || 6666
const server = startFastify(Number(port))

export { server }
