import { FastifyInstance } from 'fastify'
import { startFastify } from '../server'
import { Server, IncomingMessage, ServerResponse } from 'http'
import * as dbHandler from './db'
import { IForm } from '../types/form'
import { FormRepoImpl } from '../repo/form-repo'

describe('Form-API tests', () => {
  let server: FastifyInstance<Server, IncomingMessage, ServerResponse>

  beforeAll(async () => {
    await dbHandler.connect()
    server = startFastify(8888)
  })

  afterEach(async () => {
    await dbHandler.clearDatabase()
  })

  afterAll(async () => {
    try {
      await dbHandler.closeDatabase()
      server.close((): void => {})
    } catch (error) {
      console.error(error)
    }
  })

  it('should return empty list when GET /forms', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/api/v1/forms'
    })
    expect(response.statusCode).toBe(200)
    const res: { forms: Array<IForm> } = JSON.parse(response.body)
    expect(res.forms).toStrictEqual([])
  })

  // other test cases ...
})
