import mongoose from 'mongoose'
import { IForm } from '../types/form'

const formSchema = new mongoose.Schema(
  {
    userprofile: {
      username: { type: String, required: true },
      departname: { type: String, required: true },
      userid: { type: String, required: true },
      phone: { type: String, required: true }
    },
    status: { type: String, default: 'new' },
    description: { type: String }
  },
  {
    timestamps: true
  }
)
export default mongoose.model<IForm>('Form', formSchema)
