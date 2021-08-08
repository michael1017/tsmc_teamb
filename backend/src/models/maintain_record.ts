import mongoose from 'mongoose'
import { IRecord } from '../types/maintain_record'

const recordSchema = new mongoose.Schema(
  {
    formid: { type: String, required: true },
    maintain_description: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

export default mongoose.model<IRecord>('Record', recordSchema)
