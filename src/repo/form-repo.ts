import { IForm } from './../types/form'
import Form from './../models/form'
import { IRecord } from '../types/maintain_record'
import Record from '../models/maintain_record'

interface FormRepo {
  getForms(): Promise<Array<IForm>>
  getFormsbyusername(username: string): Promise<Array<IForm>>
  getForm(id: string): Promise<IForm | null>
  addForm(formBody: IForm): Promise<IForm>
  updateForm(id: string, formBody: IForm): Promise<IForm | null>
  deleteForm(id: string): Promise<IForm | null>
}

class FormRepoImpl implements FormRepo {
  private constructor() {}

  static of(): FormRepoImpl {
    return new FormRepoImpl()
  }

  async getForms(): Promise<Array<IForm>> {
    return Form.find()
  }

  async getFormsbyusername(username: string): Promise<Array<IForm>> {
    return Form.find({"userprofile.username": username})
  }
  async getForm(id: string): Promise<IForm | null> {
    return Form.findById(id)
  }

  async addForm(formBody: IForm): Promise<IForm> {
    return Form.create(formBody)
  }

  async updateForm(id: string, formBody: IForm): Promise<IForm | null> {
    return Form.findByIdAndUpdate(id, formBody, { new: true })
  }

  async deleteForm(id: string): Promise<IForm | null> {
    return Form.findByIdAndDelete(id)
  }
}

export { FormRepoImpl }
