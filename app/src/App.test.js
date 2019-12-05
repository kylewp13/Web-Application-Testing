import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('renders APP', () => {
  render(<App />);
});


test('it checks for a button with Enters Players Name Here', () => {
  const { getByTestId } = render(<App/>);
  expect(getByTestId('player')).toHaveTextContent('Enters Players Name Here');
})

test('it checks for ball text', () => {
  const { getByTestId } = render(<App/>);
  expect(getByTestId('ball')).toHaveTextContent('Ball: 0');
})

test('it checks for strikes text', () => {
  const { getByTestId } = render(<App/>);
  expect(getByTestId('strikes')).toHaveTextContent('Strikes: 0');
})
// testing ball button
test('it checks for ball state to Increase to 1', () => {
  const { getByTestId, getByText } = render(<App/>);
  fireEvent.click(getByText('ball'));
  expect(getByTestId('ball')).toHaveTextContent('Ball: 1');
})

test('it checks for ball state to Increase to 2', () => {
  const { getByTestId, getByText } = render(<App/>);
  fireEvent.click(getByText('ball'));
  fireEvent.click(getByText('ball'));
  expect(getByTestId('ball')).toHaveTextContent('Ball: 2');
})

test('it checks for ball state to Increase to 3', () => {
  const { getByTestId, getByText } = render(<App/>);
  fireEvent.click(getByText('ball'));
  fireEvent.click(getByText('ball'));
  fireEvent.click(getByText('ball'));
  expect(getByTestId('ball')).toHaveTextContent('Ball: 3');
})

test('it checks for ball state is not Increase to 4', () => {
  const { getByTestId, getByText } = render(<App/>);
  fireEvent.click(getByText('ball'));
  fireEvent.click(getByText('ball'));
  fireEvent.click(getByText('ball'));
  fireEvent.click(getByText('ball'));
  expect(getByTestId('ball')).not.toHaveTextContent('Ball: 4');
})
//testing Foul Button
test('it checks for foul state to Increase to 1', () => {
  const { getByTestId, getByText } = render(<App/>);
  fireEvent.click(getByText('foul'));
  expect(getByTestId('strikes')).toHaveTextContent('Strikes: 1');
})

test('it checks for foul state to Increase to 2', () => {
  const { getByTestId, getByText } = render(<App/>);
  fireEvent.click(getByText('foul'));
  fireEvent.click(getByText('foul'));
  expect(getByTestId('strikes')).toHaveTextContent('Strikes: 2');
})

test('it checks for foul state is not Increase to 3', () => {
  const { getByTestId, getByText } = render(<App/>);
  fireEvent.click(getByText('foul'));
  fireEvent.click(getByText('foul'));
  fireEvent.click(getByText('foul'));
  expect(getByTestId('strikes')).not.toHaveTextContent('Strikes: 3');
})