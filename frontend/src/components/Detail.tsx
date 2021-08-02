import 'element-theme-default';
import React, { Component } from 'react'
import { Dialog, Button, Layout } from 'element-react';
import moment from 'moment'


class Detail extends Component<{dialogVisible: boolean, toggleVisible: (visible: boolean) => void, showData: any}> {
  render() {
    // console.log(this.props.showData.userprofile);
    // const user = this.props.showData.userprofile;
    return (
      <Dialog
        title={`ID ${this.props.showData._id}`}
        size="small"
        visible={ this.props.dialogVisible }
        onCancel={ () => this.props.toggleVisible(false)}
        lockScroll={ false }

      >
        <Dialog.Body>
          <Layout.Row gutter="20">
            <Layout.Col span="8">姓名</Layout.Col>
            <Layout.Col span="16">{this.props.showData.userprofile.username}</Layout.Col>
          </Layout.Row>
          <Layout.Row gutter="20">
            <Layout.Col span="8">工號</Layout.Col>
            <Layout.Col span="16">{this.props.showData.userprofile.userid}</Layout.Col>
          </Layout.Row>
          <Layout.Row gutter="20">
            <Layout.Col span="8">部門</Layout.Col>
            <Layout.Col span="16">{this.props.showData.userprofile.departname}</Layout.Col>
          </Layout.Row>
          <Layout.Row gutter="20">
            <Layout.Col span="8"> 聯絡電話</Layout.Col>
            <Layout.Col span="16">{this.props.showData.userprofile.phone}</Layout.Col>
          </Layout.Row>
          <Layout.Row gutter="20">
            <Layout.Col span="8">狀態</Layout.Col>
            <Layout.Col span="16">{this.props.showData.status}</Layout.Col>
          </Layout.Row>
          <Layout.Row gutter="20">
            <Layout.Col span="8">問題描述</Layout.Col>
            <Layout.Col span="16">{this.props.showData.description}</Layout.Col>
          </Layout.Row>
          <Layout.Row gutter="20">
            <Layout.Col span="8">報修時間</Layout.Col>
            <Layout.Col span="16">{moment(this.props.showData.createdAt).format('YYYY-MM-DD HH:mm:ss')}</Layout.Col>
          </Layout.Row>
          <Layout.Row gutter="20">
            <Layout.Col span="8">狀態</Layout.Col>
            <Layout.Col span="16">{this.props.showData.maintain_record.map((el: any, index: number) =>{
              return <Layout.Row gutter="20" key={index}>
                        <Layout.Col span="8">{el.maintain_description}</Layout.Col>
                        <Layout.Col span="16">{moment(el.maintain_time).format('YYYY-MM-DD HH:mm:ss')}</Layout.Col>
                      </Layout.Row>
              // this.state.options.map(el => {
              //   return <Select.Option key={el.value} label={el.label} value={el.value} />
              // })
              // console.log(o.maintain_description)
            })}</Layout.Col>
          </Layout.Row>
        </Dialog.Body>
      </Dialog>
    )
  }
}
export default Detail
