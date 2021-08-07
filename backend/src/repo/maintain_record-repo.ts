import { IRecord } from '../types/maintain_record'
import Record from '../models/maintain_record'

interface RecordRepo {
  getRecords(): Promise<Array<IRecord>>
  getRecord(id: string): Promise<Array<IRecord>>
  addRecord(formBody: IRecord): Promise<IRecord>
  updateRecord(id: string, formBody: IRecord): Promise<IRecord | null>
  deleteRecord(formid: string): Promise<IRecord | null>
}

class RecordRepoImpl implements RecordRepo {
  private constructor() {}

  static of(): RecordRepoImpl {
    return new RecordRepoImpl()
  }

  async getRecords(): Promise<Array<IRecord>> {
    return Record.find()
  }

  async getRecord(formid: string): Promise<Array<IRecord>> {
    return Record.find({ formid: formid })
  }

  async addRecord(formBody: IRecord): Promise<IRecord> {
    return Record.create(formBody)
  }

  async updateRecord(id: string, formBody: IRecord): Promise<IRecord | null> {
    return Record.findByIdAndUpdate(id, formBody, { new: true })
  }

  async deleteRecord(formid: string): Promise<IRecord | null> {
    return Record.remove({ formid: formid })
  }
}

export { RecordRepoImpl }
