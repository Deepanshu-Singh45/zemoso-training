


import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Checkbox, { CheckboxProps } from './Checkbox';
import './Checkbox.css'

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Small = Template.bind({});
Small.args = {
  type: 'checkbox',
  cls : 'small'
};

export const Medium = Template.bind({});
Medium.args = {
  type: 'checkbox',
  cls : 'medium'
};


export const Large = Template.bind({});
Large.args = {
  type: 'checkbox',
  cls : 'large'
};


