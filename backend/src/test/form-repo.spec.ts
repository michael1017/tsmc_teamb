import * as dbHandler from './db'
import { IForm } from '../types/form'
import { FormRepoImpl } from '../repo/form-repo'
import { RecordRepoImpl } from '../repo/maintain_record-repo'
import {IRecord} from '../types/maintain_record'

describe('Form-Repo tests', () => {
   beforeAll(async () => {
     await dbHandler.connect()
   })

   afterEach(async () => {
     await dbHandler.clearDatabase()
   })

   afterAll(async () => {
     try {
       await dbHandler.closeDatabase()
     } catch (error) {
       console.error(error)
     }
   })

   it('should get empty list when database is empty', async () => {
     const formRepo: FormRepoImpl = FormRepoImpl.of()
     const RecordRepo: RecordRepoImpl = RecordRepoImpl.of()

     const forms: Array<IForm> = await formRepo.getForms()
     const record: Array<IRecord> = await RecordRepo.getRecords()

     expect(forms).toHaveLength(0)
     expect(forms).toStrictEqual([])

     expect(record).toHaveLength(0)
     expect(record).toStrictEqual([])

   })


   it('should execute CRUD functions successfully', async () => {
    const formRepo: FormRepoImpl = FormRepoImpl.of()
    const RecordRepo: RecordRepoImpl = RecordRepoImpl.of()

     // create
     const formBody: IForm = {
        userprofile:{
            username:'劉哲維',
            departname:'ASISD-08',
            userid:'120611',
            phone:'770152'
        },
        status:'new',
        description:'無法開機'
     }

     const newformBody:IForm = {
        userprofile:{
            username:'劉哲維',
            departname:'ASISD-08',
            userid:'120611',
            phone:'770152'
        },
        status:'processing',
        description:'無法安裝Docker'
     }

     const newForm: IForm = await formRepo.addForm(formBody)
     const newFormId: string = newForm._id ? newForm._id : ''


     const Record: IRecord = {
         formid: newFormId,
         maintain_description:'沒救'
     }
     
     expect(newForm).toBeTruthy()
     //expect(newForm.computerName).toBe('LLB20558')
     expect(newForm.status).toBe('new')

     // query all forms
    const forms: Array<IForm> = await formRepo.getForms()
     expect(forms).toHaveLength(1)

     // query one form
     const findAddedForm = await formRepo.getForm(newFormId)
     if (findAddedForm !== null) {
    //expect(findAddedForm.computerName).toBe('LLB20558')
        expect(findAddedForm.userprofile.username).toBe('劉哲維')
        expect(findAddedForm.status).toBe('new')
     } 

     const findName = await formRepo.getFormsbyusername(formBody.userprofile.username)
     if (findName !== null){
         expect(findName).toHaveLength(1)
     }

     // new record
     const newRecord = await RecordRepo.addRecord(Record)
     expect(newRecord).toBeTruthy()

     const record: Array<IRecord> = await RecordRepo.getRecord(newFormId)
     if (record !== null){
         expect(record).toHaveLength(1)
     }

     // update
     formBody.status = 'processing'
     const updatedForm = await formRepo.updateForm(newFormId, newformBody)
     expect(updatedForm).toBeTruthy()
     if (updatedForm !== null) {
       expect(updatedForm.status).toBe('processing')
       expect(updatedForm.description).toBe('無法安裝Docker')
     }

     Record.maintain_description = '其實還可以搶救一下'
     const updateRecord = await RecordRepo.updateRecord(newFormId,Record)
     if(updateRecord !== null) {
         expect(updateRecord.maintain_description).toBe('其實還可以搶救一下')
     }

     // delete
     await formRepo.deleteForm(newFormId)
     await RecordRepo.deleteRecord(newFormId)

     // query all forms after delete
     const formsAfterDelete: Array<IForm> = await formRepo.getForms()
     expect(formsAfterDelete).toHaveLength(0)

     const recordAfterDelete: Array<IRecord> = await RecordRepo.getRecords()
     expect(recordAfterDelete).toHaveLength(0)
   })
 })
