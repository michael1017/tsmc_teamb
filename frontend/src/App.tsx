import React, { useEffect, useState } from 'react'
import FormItem from './components/FormItem'
import { getForms, addForm, updateForm, deleteForm } from './API'
import { IForm } from './types/form';
import { Input, Table, Button } from 'element-react';
import 'element-theme-default';
import Banner from './components/Banner'


import './App.css'

const App = () => {

  const [formsDefault, setFormsDefault] = useState<IForm[]>([])
  const [forms, setForms] = useState<IForm[]>([])
  const [input, setInput] = useState('')
  useEffect(() => {
    fetchForms()
  }, [])

  const updateInput = async (input:string) => {
    const filtered = formsDefault.filter(form => {
     return form.userprofile.username.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setForms(filtered);
 }


  const fetchForms = (): void => {
    // getForms()
    //   .then(({ data: { forms } }: IForm[] | any) => setForms(forms))
    //   .catch((err: Error) => console.error(err))
    console.log(getForms())
    setFormsDefault(getForms())
    setForms(getForms())
  }

  interface MyColumn {
    label: string,
    prop: string
    width: number,
    [key: string]: any
  }

  const [columns, setColumns] = useState<
    Array<MyColumn>
  >([{
    label: 'ID',
    prop: '_id',
    width: 300,
  },
  {
    label: '姓名',
    prop: 'userprofile.username',
    width: 200
  },
  {
    label: '部門',
    prop: 'userprofile.departname',
    width: 200
  },
  {
    label: '工號',
    prop: 'userprofile.userid',
    width: 200
  },
  {
    label: '聯絡電話',
    prop: 'userprofile.phone',
    width: 200
  },
  {
    label: '操作',
    prop: 'action',
    width: 300,
    // eslint-disable-next-line react/display-name
    render: ()=>{
      return <span><Button type="primary" icon="document"></Button><Button type="primary" icon="edit"></Button><Button type="primary" icon="delete"></Button></span>
    }
  }]);

	return (
		<main className="App">
      <Banner
       keyword = {input}
       setKeyword = {updateInput}
      />

      <div style={{marginTop: '30px', display: 'flex', justifyContent: 'center'}}>
        <Table
          style={{width: '92%'}}
          columns={columns}
          data={forms}
          border={true}
        />
      </div>
		</main>
	)
}

export default App
