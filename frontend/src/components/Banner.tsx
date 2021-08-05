import { IForm } from '../types/form'
import React, { Component } from 'react'
import { Input} from 'element-react';
import 'element-theme-default';

class Banner extends Component<{setKeyword: (str: string) => void, keyword: string;}> {
  text = (e:any) : void => {
    this.props.setKeyword(e)
  };

  render() {
    return(
    <div className="faq-header">
      <div className="faq-container">
        <div className="faq-title">FAQ Manager</div>
        <Input
          placeholder="Please Enter User Name"
          style={{width: '400px', position: 'relative', top: '10px'}}
          value={this.props.keyword}
          onChange={(e: React.FormEvent<HTMLInputElement>):void => this.text(e)}
        />
      </div>
    </div>
    )
  }
}


export default Banner
