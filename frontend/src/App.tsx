import React, { useEffect, useState } from 'react'
import FormItem from './components/FormItem'
import { getForms, addForm, updateForm, deleteForm } from './API'
import { IForm } from './types/form';
import { Input, Table, Button } from 'element-react';
import 'element-theme-default';
import Banner from './components/Banner'
import Detail from './components/Detail'
import Delete from './components/Delete'
import Edit from './components/Edit'


import './App.css'

const App = () => {

  const [formsDefault, setFormsDefault] = useState<IForm[]>([])
  const [forms, setForms] = useState<IForm[]>([])
  const [input, setInput] = useState('')
  useEffect(() => {
    fetchForms()
  }, [])
  const [dialogVisible, setDialogVisible] = useState(false)
  const [dialogVisible2, setDialog2Visible] = useState(false)
  const [dialogVisible3, setDialog3Visible] = useState(false)


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
    // console.log(getForms())
    setFormsDefault(getForms())
    setForms(getForms())
  }

  interface Detail {
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

  const [detailData, setDetailData] = useState<Detail>({
    _id: '',
    userprofile: {
      username : '',
      departname: '',
      userid:'',
      phone:''
    },
    description:'',
    status: '',
    createdAt:new Date,
    maintain_record:[]
  })

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
    width: 250,
  },
  {
    label: '姓名',
    prop: 'userprofile.username',
    width: 150
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
    width: 320,
    // eslint-disable-next-line react/display-name
    render: (row: any)=>{
      return <span><Button type="primary" icon="document" onClick={detailOpen.bind(this, row)}></Button><Button type="primary" icon="edit" onClick={editOpen.bind(this, row)}></Button><Button type="primary" icon="delete" onClick={deleteOpen.bind(this, row)}></Button></span>
    }
  }]);

  const detailVisible = (visible: boolean) : void => {
    setDialogVisible(visible);
  }
  const deleteVisible = (visible: boolean) : void => {
    setDialog2Visible(visible);
  }
  const editVisible = (visible: boolean) : void => {
    setDialog3Visible(visible);
  }

  const detailOpen = (row: any) : void => {
    setDialogVisible(true);
    setDetailData(row);
    // console.log(row);
  }

  const deleteOpen = (row: any) : void => {
    setDialog2Visible(true);
    setDetailData(row);
    // console.log(row);
  }

  const editOpen = (row: any) : void => {
    setDialog3Visible(true);
    setDetailData(row);
    // console.log(row);
  }

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
      <Detail dialogVisible={dialogVisible} toggleVisible={detailVisible} showData={detailData}/>
      <Delete dialogVisible={dialogVisible2} toggleVisible={deleteVisible} reportId={detailData._id}/>
      <Edit dialogVisible={dialogVisible3} toggleVisible={editVisible} reportId={detailData._id}/>
		</main>
	)
}

export default App
