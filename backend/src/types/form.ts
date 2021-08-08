type IForm = {
  readonly _id?: string
  userprofile: {
    username: string
    departname: string
    userid: string
    phone: string
  }
  description: string
  status: 'new' | 'processing' | 'completed'
  readonly createdAt?: Date
}

export { IForm }
