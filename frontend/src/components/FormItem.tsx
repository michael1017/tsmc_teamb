import React from 'react'
import { IForm } from '../types/form'


const Form = (
	props: {
    form: IForm,
  }) => {

	return (
		<tr>
			<td>{props.form._id}</td>
			<td>{props.form.username}</td>
			<td>{props.form.computerName}</td>
			<td>{props.form.status}</td>
			<td>{props.form.createdAt}</td>
		</tr>
	)
}

export default Form
