import axios, { AxiosResponse } from 'axios'
import { IForm } from './types/form'

const API_URL = 'http://localhost:8888/api'

const getForms = async (): Promise<AxiosResponse<Array<IForm>>> => {
	try {
		const forms = await axios.get(`${API_URL}/forms`)
		console.log('forms = ', forms)
		return forms
	} catch (error) {
		console.error(`GET /api/forms ERROR: ${error}`)
		throw new Error(error)
	}
}

const addForm = async (formBody: IForm): Promise<AxiosResponse<IForm>> => {
	try {
		const form = await axios.post(`${API_URL}/forms`, formBody)
		return form
	} catch (error) {
		console.error(`POST /api/forms ERROR: ${error}`)
		throw new Error(error)
	}
}

const updateForm = async (formBody: IForm): Promise<AxiosResponse<IForm>> => {
	try {
		const todo = await axios.put(`${API_URL}/forms/${formBody._id}`, formBody)
		return todo
	} catch (error) {
		console.error(`PUT /api/forms/${formBody._id} ERROR: ${error}`)
		throw new Error(error)
	}
}

const deleteForm = async (id: string): Promise<AxiosResponse> => {
	try {
		const res = await axios.delete(`${API_URL}/forms/${id}`)
		return res
	} catch (error) {
		console.error(`DELETE /api/forms/${id} ERROR: ${error}`)
		throw new Error(error)
	}
}

export { getForms, addForm, updateForm, deleteForm }
