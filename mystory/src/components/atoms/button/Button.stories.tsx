


import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from './Button';
import './Button.css'


export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  type: 'button',
  color : 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  type: 'button',
  color : 'secondary'
};


export const Success = Template.bind({});
Success.args = {
  label: 'Success',
  type: 'button',
  color : 'success'

};


export const Danger = Template.bind({});
Danger.args = {
  label: 'Danger',
  type: 'button',
  color : 'danger'
};

