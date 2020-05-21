import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Item from 'antd/lib/list/Item';


test('renders without crashing', () => {
  render(
    <span className="greet">hello world</span>
  )
})


