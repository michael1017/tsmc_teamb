import React from 'react'
import { IForm } from '../types/form'
import { Input} from 'element-react';
import 'element-theme-default';

class Banner extends React.Component {
    render() {
      return (
        <div className="faq-header">
            <div className="faq-container">
                <div className="faq-title">FAQ Manager</div>
                <Input
                    placeholder="Please Enter User Name"
                    style={{width: '400px', position: 'relative', top: '10px'}}
                />
            </div>
        </div>
      );
    }
  }

export default Banner
