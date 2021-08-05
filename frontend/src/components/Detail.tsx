import 'element-theme-default';
import React, { Component } from 'react'
import { IDetail, IRecord} from '../types/form'
import { Dialog, Layout } from 'element-react';
import moment from 'moment'


class Detail extends Component<{dialogVisible: boolean, toggleVisible: (visible: boolean) => void, showData: IDetail}> {
  render() {
    return (
      <Dialog
        title={`ID ${this.props.showData.form._id}`}
        size="small"
        visible={ this.props.dialogVisible }
        onCancel={ () => this.props.toggleVisible(false)}
        lockScroll={ false }

      >
        <Dialog.Body>
          <Layout.Row gutter="20">
            <Layout.Col span="8">姓名</Layout.Col>
            <Layout.Col span="16">{this.props.showData.form.userprofile.username}</Layout.Col>
          </Layout.Row>
          <Layout.Row gutter="20">
            <Layout.Col span="8">工號</Layout.Col>
            <Layout.Col span="16">{this.props.showData.form.userprofile.userid}</Layout.Col>
          </Layout.Row>
          <Layout.Row gutter="20">
            <Layout.Col span="8">部門</Layout.Col>
            <Layout.Col span="16">{this.props.showData.form.userprofile.departname}</Layout.Col>
          </Layout.Row>
          <Layout.Row gutter="20">
            <Layout.Col span="8"> 聯絡電話</Layout.Col>
            <Layout.Col span="16">{this.props.showData.form.userprofile.phone}</Layout.Col>
          </Layout.Row>
          <Layout.Row gutter="20">
            <Layout.Col span="8">狀態</Layout.Col>
            <Layout.Col span="16">{this.props.showData.form.status}</Layout.Col>
          </Layout.Row>
          <Layout.Row gutter="20">
            <Layout.Col span="8">問題描述</Layout.Col>
            <Layout.Col span="16">{this.props.showData.form.description}</Layout.Col>
          </Layout.Row>
          <Layout.Row gutter="20">
            <Layout.Col span="8">報修時間</Layout.Col>
            <Layout.Col span="16">{moment(this.props.showData.form.createdAt).format('YYYY-MM-DD HH:mm:ss')}</Layout.Col>
          </Layout.Row>
          <Layout.Row gutter="20">
            <Layout.Col span="8">維修紀錄</Layout.Col>
            <Layout.Col span="16">{this.props.showData.records.map((el: IRecord, index: number) =>{
              return <Layout.Row gutter="20" key={index}>
                        <Layout.Col span="8">{el.maintain_description}</Layout.Col>
                        <Layout.Col span="16">{moment(el.createdAt).format('YYYY-MM-DD HH:mm:ss')}</Layout.Col>
                      </Layout.Row>
            })}</Layout.Col>
          </Layout.Row>
        </Dialog.Body>
      </Dialog>
    )
  }
}
export default Detail
