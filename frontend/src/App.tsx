import React, { useEffect, useState } from 'react'
import FormItem from './components/FormItem'
import { getForms, addForm, updateForm, deleteForm } from './API'
import { IForm } from './types/form'
import './App.css'

const App = () => {
  const [forms, setForms] = useState<IForm[]>([])

  useEffect(() => {
    fetchForms()
  }, [])

  const fetchForms = (): void => {
    getForms()
      .then(({ data: { forms } }: IForm[] | any) => setForms(forms))
      .catch((err: Error) => console.error(err))
  }

  return (
    <main className="App">
      <h1>My Forms</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <td>Username</td>
            <th>Computer Name</th>
            <th>Status</th>
            <th>Create At</th>
          </tr>
        </thead>
        <tbody>
          {
            forms.map((form: IForm) => (
              <FormItem
                key={form._id}
                form={form}
              />
            ))
          }
        </tbody>
      </table>
    </main>
  )
}

export default App
