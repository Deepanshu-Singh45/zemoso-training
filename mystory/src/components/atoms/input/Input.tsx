

import React from 'react';

export interface InputProps {
  type : 'input field'
  cls : string
  text : string
}

const Input = ({ cls, text }:InputProps) => {
  const inputClass = `input ${cls}`;
  const Text = text;
  return (
    <input type='text' className={inputClass} placeholder={Text}>
    </input>
  )
}

export default Input;


