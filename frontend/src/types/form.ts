// type IForm = {
//   readonly _id?: string
//   username: string
//   computerName: string
//   status: 'new' | 'processing' | 'completed'
//   readonly createdAt?: Date
//   readonly updatedAt?: Date
// }
type IForm = {
  readonly _id?: string
  readonly userprofile: {
    username : string
    departname: string
    userid:string
    phone:string
  }
  description:string
  status: string
  createdAt:Date
  maintain_record: {
    maintain_time:Date
    maintain_description:string
  }[]
}
export type { IForm }
