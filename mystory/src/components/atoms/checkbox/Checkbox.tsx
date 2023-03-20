

import React from 'react';

export interface CheckboxProps {
  type : 'checkbox'
  cls : string
}

const Checkbox = ({ cls }:CheckboxProps) => {
  const checkboxClass = `input ${cls}`;
  return (
    <input type='checkbox' className={checkboxClass}>
    </input>
  )
}

export default Checkbox;


