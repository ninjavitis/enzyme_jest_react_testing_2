import React from 'react';
import {shallow} from 'enzyme'
import { findByTestAttr, checkProps } from "../../Test/TestUtils";
import Input from './Input'

const setup = (secretWord='party') => {
  return shallow(<Input secretWord={secretWord}/>)
}

test('it renders', ()=>{
  const wrapper = setup()
  const inputComponent = findByTestAttr(wrapper, 'input-component')
  expect(inputComponent.length).toBe(1)
})

test ('does not throw warning with expected props',()=>{
  checkProps(Input, {secretWord: ''})
})

describe('state controlled input field', ()=>{
  let mockSetCurrentGuess = jest.fn()
  let wrapper

  beforeEach(()=>{
    mockSetCurrentGuess.mockClear()
    React.useState = jest.fn(()=>["", mockSetCurrentGuess])
    wrapper = setup()
  })

  test('state updates with value of input field on change',()=>{
    const inputBox = findByTestAttr(wrapper, 'input-box')
    const mockEvent = {target: {value: 'train'}}
    inputBox.simulate("change", mockEvent)
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
  })

  test('currentGuess is cleared on submit',()=>{
    const submitButton = findByTestAttr(wrapper, 'submit-button')
    submitButton.simulate("click", { preventDefault(){} })
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('')
  })
})