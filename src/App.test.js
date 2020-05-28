import React from 'react';
import { render } from '@testing-library/react';
import App from './App';



test("Render text",  () => {
  render ("Hello");
});

test("renders App without crashing", () => {
  render(<App />);
});

test("App renders without crashing",  () => {
  const {getByText} = render (<App/>);
  const carMake = getByText(/make/i);
  expect(carMake).toBeInTheDocument()
});

test("renders message header", () => {
  const { getByText } = render(<App />);
  const submit = getByText(/home/i)
  expect(submit).toBeInTheDocument()

});



// test('Renders data from /make endpoint', () => {
//   const {getByText} = render(<App><Dropdown /></App>)
//   const makeName = getByText(/make/i);
//   expect(makeName).toBeInTheDocument()
//   })

