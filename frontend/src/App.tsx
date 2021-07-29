import React, { useEffect, useState } from 'react'
import FormItem from './components/FormItem'
import { getForms, addForm, updateForm, deleteForm } from './API'
import { IForm } from './types/form';
import { Input, Table, Button } from 'element-react';
import 'element-theme-default';

import './App.css'

const App = () => {
  interface MyColumn {
    label: string,
    prop: string
    width: number,
    [key: string]: any
  }

  interface MyData {
    id: string,
    name: string,
    department: string,
    workId: string,
    phone: string,
    action: any,
    time: string,
    status: string,
    description: string,
    log: string
  }

  const [columns, setColumns] = useState<
    Array<MyColumn>
  >([{
    label: 'ID',
    prop: 'id',
    width: 300,
  },
  {
    label: '姓名',
    prop: 'name',
    width: 200
  },
  {
    label: '部門',
    prop: 'department',
    width: 200
  },
  {
    label: '工號',
    prop: 'workId',
    width: 200
  },
  {
    label: '聯絡電話',
    prop: 'phone',
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

  const [data, setDatas] = useState<
    Array<MyData>
  >([{
    id: '1111111',
    name: 'aaaa',
    department: 'AAID',
    workId: '120801',
    phone: '0912435677',
    action: 'any',
    time: '2021-07-24',
    status: 'complete',
    description: 'ok',
    log: 'cdcd'
  },{
    id: '1111112',
    name: 'aaaa',
    department: 'AAID',
    workId: '120801',
    phone: '0912435677',
    action: 'any',
    time: '2021-07-24',
    status: 'complete',
    description: 'ok',
    log: 'cdcd'
  },{
    id: '1111113',
    name: 'aaaa',
    department: 'AAID',
    workId: '120801',
    phone: '0912435677',
    action: 'any',
    time: '2021-07-24',
    status: 'complete',
    description: 'ok',
    log: 'cdcd'
  }])

  // this.state = {
  //     columns: [

  //     ]
  // }

	// useEffect(() => {
	// 	fetchForms()
	// }, [])

	// const fetchForms = (): void => {
	// 	getForms()
	// 		.then(({ data: { forms } }: IForm[] | any) => setForms(forms))
	// 		.catch((err: Error) => console.error(err))
	// }


	return (
		<main className="App">
      <div className="faq-header">
        <div className="faq-container">
          <div className="faq-title">FAQ Manager</div>
          <Input
            placeholder="Please Enter User Name"
            style={{width: '400px', position: 'relative', top: '10px'}}
          />
        </div>
      </div>

      <div style={{marginTop: '30px', display: 'flex', justifyContent: 'center'}}>
        <Table
          style={{width: '92%'}}
          columns={columns}
          data={data}
          border={true}
        />
      </div>

			{/* <h1>My Forms</h1>
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
			</table> */}
		</main>
	)
}

export default App
