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