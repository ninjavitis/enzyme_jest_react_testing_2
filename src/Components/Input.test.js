import React from 'react';
import {shallow} from 'enzyme'
import { findByTestAttr } from "../../Test/TestUtils";
import Input from './Input'

const setup =()=>{
  return shallow(<Input />)
}

test('it renders', ()=>{
  const wrapper = setup()
  const inputComponent = findByTestAttr(wrapper, 'input-component')
  expect(inputComponent.length).toBe(1)
})