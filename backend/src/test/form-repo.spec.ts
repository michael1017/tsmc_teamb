import * as dbHandler from './db'
import { IForm } from '../types/form'
import { FormRepoImpl } from '../repo/form-repo'

// describe('Form-Repo tests', () => {
//   beforeAll(async () => {
//     await dbHandler.connect()
//   })

//   afterEach(async () => {
//     await dbHandler.clearDatabase()
//   })

//   afterAll(async () => {
//     try {
//       await dbHandler.closeDatabase()
//     } catch (error) {
//       console.error(error)
//     }
//   })

//   it('should get empty list when database is empty', async () => {
//     const formRepo: FormRepoImpl = FormRepoImpl.of()

//     const forms: Array<IForm> = await formRepo.getForms()
//     expect(forms).toHaveLength(0)
//     expect(forms).toStrictEqual([])
//   })

//   it('should execute CRUD functions successfully', async () => {
//     const formRepo: FormRepoImpl = FormRepoImpl.of()

//     // create
//     const formBody: IForm = {
//      // computerName: 'LLB20558',
//       username: 'yubin',
//       phoneNumber: '7XX-XXXX',
//       problem: '無法開機',
//       status: 'new'
//     }
//     const newForm: IForm = await formRepo.addForm(formBody)
//     const newFormId: string = newForm._id ? newForm._id : ''
//     expect(newForm).toBeTruthy()
//     //expect(newForm.computerName).toBe('LLB20558')
//     expect(newForm.status).toBe('new')

//     // query all forms
//     const forms: Array<IForm> = await formRepo.getForms()
//     expect(forms).toHaveLength(1)

//     // query one form
//     const findAddedForm = await formRepo.getForm(newFormId)
//     if (findAddedForm !== null) {
//      // expect(findAddedForm.computerName).toBe('LLB20558')
//       expect(findAddedForm.status).toBe('new')
//     }

//     // update
//     formBody.status = 'processing'
//     const updatedForm = await formRepo.updateForm(newFormId, formBody)
//     expect(updatedForm).toBeTruthy()
//     if (updatedForm !== null) {
//       expect(updatedForm.status).toBe('processing')
//     }

//     // delete
//     await formRepo.deleteForm(newFormId)
//     // query all forms after delete
//     const formsAfterDelete: Array<IForm> = await formRepo.getForms()
//     expect(formsAfterDelete).toHaveLength(0)
//   })
// })
