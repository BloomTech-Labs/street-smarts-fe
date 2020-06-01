import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import Dropdown from './components/search'



test("verify dropdown populates", () => {
  const { getByText } = render(<App/>)
  const makeId = getByText(/make/i)
  expect(makeId).toBeInTheDocument()
})

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

test('test if dropdown is enabled', () => {

})

// test('make dropdown expands when clicked', () => {
//   const { getByText, debug } = render(<App/>);
//   const makeId = getByText(/make/i)
//   debug(makeId)
//   fireEvent.change(makeId, { target: { value: 'Ford' } })
  

//   expect(makeId.value).toInclude('Ford')
// })





