import React from 'react';
import { storiesOf } from '@storybook/react';
// import { Button } from '@storybook/react/demo';
import Button from 'wix-style-react/Button';
import Breadcrumbs from 'wix-style-react/Breadcrumbs';

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ))
  .add('Breadcrumbs', () => (
    <Breadcrumbs activeId="1"
  items={[
    {
      id: '1',
      value: 'First item'
    },
    {
      id: '2',
      link: 'http://www.wix.com',
      value: 'Linked item'
    },
    {
      id: '3',
      value: 'Third item'
    }
  ]}></Breadcrumbs>
  ))
