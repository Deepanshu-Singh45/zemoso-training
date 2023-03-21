


import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Input, { InputProps } from './Input';
import './Input.css';

export default {
  title: 'Atoms/input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Small = Template.bind({});
Small.args = {
  type: 'input field',
  cls : 'small',
  text : 'small-size'
};

export const Medium = Template.bind({});
Medium.args = {
  type: 'input field',
  cls : 'medium',
  text : 'medium-size'
};


export const Large = Template.bind({});
Large.args = {
  type: 'input field',
  cls : 'large',
  text : 'large-size'
};


