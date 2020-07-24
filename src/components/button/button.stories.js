import React from 'react';
import Button from './';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
  component: Button,
};
export const PrimaryButton = () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
);

export const SecondaryButton = () => (
  <Button background="bright" color="dark" onClick={action('clicked')}>
    Secondary Button
  </Button>
);
