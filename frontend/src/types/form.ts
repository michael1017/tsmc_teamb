type IForm = {
  readonly _id: string
  readonly userprofile: {
    username : string
    departname: string
    userid:string
    phone:string
  }
  description:string
  status: string
  readonly createdAt ?: Date
}
type IRecord = {
  readonly _id: string
  formid: string
  maintain_description: string
  readonly createdAt ?: Date
  readonly updatedAt ?: Date
}
type IMaintainDescription = {
  maintain_description:string
}

type IStatus = {
  status: string
}

type IDetail = {
  form : IForm
  records: Array<IRecord>
}
export type { IForm, IRecord, IMaintainDescription, IStatus, IDetail}
