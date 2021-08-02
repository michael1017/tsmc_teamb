import 'element-theme-default';
import React, { Component } from 'react'
import { Dialog, Button, Layout, Select, Input } from 'element-react';

class Edit extends Component<{dialogVisible: boolean, toggleVisible: (visible: boolean) => void, reportId: string | undefined}, {options: any, value: string,descriptionValue: string}> {
  state = {
    value: '',
    options: [{
      value: 'new',
      label: 'New'
    }, {
      value: 'completed',
      label: 'Completed'
    }, {
      value: 'processing',
      label: 'Processing'
    }],
    descriptionValue: ''
  }

  editConfirm = () : void => {
    console.log(this.state.value)
    console.log(this.state.descriptionValue)
    this.props.toggleVisible(false)
  }

  text = (e:any) : void => {
    this.setState({ descriptionValue: e });
  };

  select = (e:any) : void => {
    this.setState({ value: e });
  };

  render() {
    return(
      <Dialog
        title={`ID ${this.props.reportId}`}
        size="tiny"
        visible={ this.props.dialogVisible }
        onCancel={ () => this.props.toggleVisible(false) }
        lockScroll={ false }
      >
        <Dialog.Body>
          <Layout.Row gutter="20">
            <Layout.Col span="8">維修狀態</Layout.Col>
            <Layout.Col span="16">
            <Select value={this.state.value} onChange={(e: React.FormEvent<HTMLInputElement>):void => this.select(e)} placeholder="選擇狀態">
              {
                this.state.options.map(el => {
                  return <Select.Option key={el.value} label={el.label} value={el.value} />
                })
              }
            </Select>
            </Layout.Col>
          </Layout.Row>
          <Layout.Row gutter="20" style={{marginTop: '10px'}}>
            <Layout.Col span="8">維修紀錄</Layout.Col>
            <Layout.Col span="16">
              <Input
                type="textarea"
                autosize={{ minRows: 2, maxRows: 4}}
                placeholder="請輸入維修紀錄"
                onChange={(e: React.FormEvent<HTMLInputElement>):void => this.text(e)}
              />
            </Layout.Col>
          </Layout.Row>
        </Dialog.Body>
        <Dialog.Footer className="dialog-footer">
          <Button onClick={this.editConfirm} type="info">編輯</Button>
          <Button onClick={ () => this.props.toggleVisible(false) }>取消</Button>
        </Dialog.Footer>
      </Dialog>
    )
  }
}

export default Edit
