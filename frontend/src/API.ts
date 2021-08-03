import axios, { AxiosResponse } from 'axios'
import { IForm, IMaintainDescription, IStatus} from './types/form'


const API_URL = 'http://localhost:8888/api'

const data1 : IForm = {
  _id : '1112223334444',
  userprofile: {
    username : '楊晶宇',
    departname: 'MQSI',
    userid:'120645',
    phone:'0909721399',
  },
  description:'for testing',
  status: 'unproccessed',
  createdAt: new Date(2018, 0O5, 0O5, 17, 23, 42, 11),
  maintain_record:[
    {
      maintain_time: new Date(2018, 0O5, 0O5, 17, 23, 42, 11),
      maintain_description:'for test',
    },
    {
      maintain_time: new Date(2018, 0O5, 0O5, 17, 23, 42, 11),
      maintain_description:'for test',
    }
  ]
}

const data2 : IForm = {
	_id : '1112223334444',
	userprofile: {
		username : '李曉明',
		departname: 'MQSI',
		userid:'120645',
		phone:'0909721399',
	},
	description:'for testing',
	status: 'unproccessed',
	createdAt: new Date(2019, 0O5, 0O5, 17, 23, 42, 11),
	maintain_record: [
		{
      maintain_time: new Date(2018, 0O5, 0O5, 17, 23, 42, 11),
      maintain_description:'for test',
		},
		{
      maintain_time: new Date(2019, 0O5, 0O5, 17, 23, 42, 11),
      maintain_description:'for test',
		}
	]
}

// const getForms = async (): Promise<AxiosResponse<Array<IForm>>> => {
// 	try {
// 		const forms = await axios.get(`${API_URL}/forms`)
// 		console.log('forms = ', forms)
// 		return forms
// 	} catch (error) {
// 		console.error(`GET /api/forms ERROR: ${error}`)
// 		throw new Error(error)
// 	}
// }

// const getForms = ():Array<IForm> => {
// 	return[data1, data2]
// }

const addMaintainDescription = async (id: string, maintain_description: IMaintainDescription): Promise<AxiosResponse<any>> => {
	try {
		const form = await axios.post(`${API_URL}/forms/${id}`, maintain_description)
		return form
	} catch (error) {
		console.error(`POST /api/forms/${id} ERROR: ${error}`)
		throw new Error(error)
	}
}

const getForms = async (): Promise<AxiosResponse<any>> => {
	try {
		const forms = await axios.get(`${API_URL}/forms`)
		console.log('forms = ', forms)
		return forms
	} catch (error) {
		console.error(`GET /api/forms ERROR: ${error}`)
		throw new Error(error)
	}
}

const getRecords = async (id:string): Promise<AxiosResponse<any>> => {
	try {
		const records = await axios.get(`${API_URL}/forms/${id}`)
		console.log('records = ', records)
		return records
	} catch (error) {
		console.error(`GET /api/forms/${id} ERROR: ${error}`)
		throw new Error(error)
	}
}


const updateStatus = async (id: string, status: IStatus): Promise<AxiosResponse<any>> => {
	try {
		const todo = await axios.put(`${API_URL}/forms/${id}`, status)
		return todo
	} catch (error) {
		console.error(`PUT /api/forms/${id} ERROR: ${error}`)
		throw new Error(error)
	}
}
const deleteForm = async (id: string): Promise<AxiosResponse<any>> => {
	try {
		const res = await axios.delete(`${API_URL}/forms/${id}`)
		return res
	} catch (error) {
		console.error(`DELETE /api/forms/${id} ERROR: ${error}`)
		throw new Error(error)
	}
}

export { getForms, updateStatus, deleteForm, getRecords, addMaintainDescription}
