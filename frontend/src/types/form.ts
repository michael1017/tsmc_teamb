type IForm = {
  readonly _id?: string
  username: string
  computerName: string
  status: 'new' | 'processing' | 'completed'
  readonly createdAt?: Date
  readonly updatedAt?: Date
}

export type { IForm }
