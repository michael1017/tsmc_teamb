import React from 'react'
import { IForm } from '../types/form'
import { Input} from 'element-react';
import 'element-theme-default';
type Props = {
    setKeyword: (str: string) => void;
    keyword: string;
};
function Banner({keyword, setKeyword}:Props){
  return (
  <div className="faq-header">
    <div className="faq-container">
      <div className="faq-title">FAQ Manager</div>
      <input
        placeholder="Please Enter User Name"
        style={{width: '400px', position: 'relative', top: '10px'}}
        value={keyword}
        key="random1"
        onChange={event => setKeyword(event.target.value)}
      />
    </div>
  </div>
  );
}

export default Banner
