import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import App from './App'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const setup = (): any => {
  const utils = render(<App />)
  const input = utils.getByLabelText('command-input')
  return {
    input,
    ...utils,
  }
}

// test examples from the coding challenge spec sheet

test('Example A: should report Output: 0,1,NORTH', () => {
  const { getByText, input } = setup()
  // command 1
  fireEvent.change(input, { target: { value: 'PLACE 0,0,NORTH' } })
  fireEvent.click(getByText('ENTER'))
  // command 2
  fireEvent.change(input, { target: { value: 'MOVE' } })
  fireEvent.click(getByText('ENTER'))
  // command 3
  fireEvent.change(input, { target: { value: 'REPORT' } })
  fireEvent.click(getByText('ENTER'))
  expect(getByText('Output: 0,1,NORTH')).toBeInTheDocument()
})

test('Example B: should report Output: 0,0,WEST', () => {
  const { getByText, input } = setup()
  // command 1
  fireEvent.change(input, { target: { value: 'PLACE 0,0,NORTH' } })
  fireEvent.click(getByText('ENTER'))
  // command 2
  fireEvent.change(input, { target: { value: 'LEFT' } })
  fireEvent.click(getByText('ENTER'))
  // command 3
  fireEvent.change(input, { target: { value: 'REPORT' } })
  fireEvent.click(getByText('ENTER'))
  expect(getByText('Output: 0,0,WEST')).toBeInTheDocument()
})

test('Example C: should report Output: 3,3,NORTH', () => {
  const { getByText, input } = setup()
  // command 1
  fireEvent.change(input, { target: { value: 'PLACE 1,2,EAST' } })
  fireEvent.click(getByText('ENTER'))
  // command 2
  fireEvent.change(input, { target: { value: 'MOVE' } })
  fireEvent.click(getByText('ENTER'))
  // command 3
  fireEvent.change(input, { target: { value: 'MOVE' } })
  fireEvent.click(getByText('ENTER'))
  // command 4
  fireEvent.change(input, { target: { value: 'LEFT' } })
  fireEvent.click(getByText('ENTER'))
  // command 5
  fireEvent.change(input, { target: { value: 'MOVE' } })
  fireEvent.click(getByText('ENTER'))
  // command 6
  fireEvent.change(input, { target: { value: 'REPORT' } })
  fireEvent.click(getByText('ENTER'))
  expect(getByText('Output: 3,3,NORTH')).toBeInTheDocument()
})

test('Test the RIGHT command and also just check it prints in the history', () => {
  const { getByText, input } = setup()
  // command 1
  fireEvent.change(input, { target: { value: 'PLACE 2,2,EAST' } })
  fireEvent.click(getByText('ENTER'))
  // command 2
  fireEvent.change(input, { target: { value: 'RIGHT' } })
  fireEvent.click(getByText('ENTER'))
  // command 3
  fireEvent.change(input, { target: { value: 'MOVE' } })
  fireEvent.click(getByText('ENTER'))
  // command 4
  fireEvent.change(input, { target: { value: 'REPORT' } })
  fireEvent.click(getByText('ENTER'))
  expect(getByText('Output: 2,1,SOUTH')).toBeInTheDocument()
})
