import 'element-theme-default';
import React, { Component } from 'react'
import { Dialog, Button} from 'element-react';
import {deleteForm} from '../API'

class Delete extends Component<{dialogVisible: boolean, toggleVisible: (visible: boolean) => void, reportId: string, fetchForms:()=>void}> {

  deleteConfirm = () : void => {
    console.log('Delete')
    console.log(this.props.reportId)
    deleteForm(this.props.reportId).then(()=>{this.props.fetchForms();})
    this.props.toggleVisible(false)
  }
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
          <span>刪除此報修單</span>
        </Dialog.Body>
        <Dialog.Footer className="dialog-footer">
          <Button onClick={this.deleteConfirm} type="danger">刪除</Button>
          <Button onClick={ () => this.props.toggleVisible(false) }>取消</Button>
        </Dialog.Footer>
      </Dialog>
    )
  }
}

export default Delete
