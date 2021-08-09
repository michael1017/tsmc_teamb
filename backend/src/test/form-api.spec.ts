import { FastifyInstance } from 'fastify'
import { startFastify } from '../server'
import { Server, IncomingMessage, ServerResponse } from 'http'
import * as dbHandler from './db'
import { IForm } from '../types/form'
import { IRecord } from '../types/maintain_record'

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
      url: '/api/forms'
    })
    expect(response.statusCode).toBe(200)
    const res: { forms: Array<IForm> } = JSON.parse(response.body)
    expect(res.forms).toStrictEqual([])

  }) 

  it('should return forms when GET /forms' , async () =>{
    const reqAddForm = await server.inject({
      method:'POST',
      url: '/api/forms',
      payload: {
        userprofile:{
          username:'test1',
          departname:'ASISD-08',
          userid: '120654',
          phone: '770354'
        },
        status:'new',
        description:'For api testing'
      }
    })
    expect(reqAddForm.statusCode).toBe(201)
    
    const resAddForm: { form: IForm } = JSON.parse(reqAddForm.body)
    expect(resAddForm.form.userprofile.username).toBe('test1')
    expect(resAddForm.form.userprofile.departname).toBe('ASISD-08')
    expect(resAddForm.form.userprofile.userid).toBe('120654')
    expect(resAddForm.form.userprofile.phone).toBe('770354')
    expect(resAddForm.form.status).toBe('new')
    expect(resAddForm.form.description).toBe('For api testing')
    const newFormId = resAddForm.form._id?resAddForm.form._id:''
    console.log(newFormId)


    const response_null = await server.inject({
      method: 'GET',
      url: `/api/forms/${ newFormId }`,
    })
    expect(response_null.statusCode).toBe(200)

    const res_null: { records: Array<IRecord> } = JSON.parse(response_null.body)
    expect(res_null.records).toStrictEqual([])


    const reqAddRecord = await server.inject({
      method: 'POST',
      url: `/api/forms/${ newFormId }`,
      payload: {
        formid: newFormId,
        maintain_description: 'maintain record test'
      }
    })
    expect(reqAddRecord.statusCode).toBe(201)

    const resAddRecord:{record:IRecord} = JSON.parse(reqAddRecord.body)
    expect(resAddRecord.record.formid).toBe(newFormId)
    expect(resAddRecord.record.maintain_description).toBe('maintain record test')

    const reqGetRecord = await server.inject({
      method: 'GET',
      url: `/api/forms/${ resAddForm.form._id }`
    })

    expect(reqGetRecord.statusCode).toBe(200)
    const reqGetRecordBody: { records:Array<IRecord> } = JSON.parse(reqGetRecord.body)
    expect(reqGetRecordBody.records[0].formid).toBe(resAddForm.form._id)
    expect(reqGetRecordBody.records[0].maintain_description).toBe('maintain record test')
    
    const FormUpdate = await server.inject({
      method: 'PUT',
      url:  `/api/forms/${newFormId}`,
      payload: {
        status:'processing',
        description:'For update api testing'
      }
    })
    expect(FormUpdate.statusCode).toBe(200)
    const reqFormUpdate:{ form: IForm } = JSON.parse(FormUpdate.body)
    expect(reqFormUpdate.form.status).toBe('processing')
    expect(reqFormUpdate.form.description).toBe('For update api testing')
/*
    const RecordUpdate = await server.inject({
      method: 'PUT',
      url:  `api/fomrs/${ resAddForm.form._id }`,
      payload: {
        formid: resAddForm.form._id,
        maintain_description: 'update maintain record test'
      }
    })
    expect(RecordUpdate.statusCode).toBe(201)
    const reqRecordUpdate:{ Record:IRecord } = JSON.parse(RecordUpdate.body)
    expect(reqRecordUpdate.Record.maintain_description).toBe('update maintain record test')
*/
    const DeleteForm = await server.inject({
      method: 'DELETE',
      url: `/api/forms/${ resAddForm.form._id }`
    })
    expect (DeleteForm.statusCode).toBe(204)
    })
    
})
