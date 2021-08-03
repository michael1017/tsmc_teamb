import axios, { AxiosResponse } from 'axios'
import { IForm } from './types/form'

const API_URL = 'http://localhost:8888/api'

const addForm = async (formBody: IForm): Promise<AxiosResponse<IForm>> => {
  try {
    const form = await axios.post(`${API_URL}/forms`, formBody)
    console.log('form = ', form)
    return form
  } catch (error) {
    console.error(`POST /api/forms ERROR: ${error}`)
    throw new Error(error)
  }
}

export { addForm }
