import React from 'react';
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from "enzyme-adapter-react-16";
import Congrats from './Congrats'

import { findByTestAttr } from "../Test/TestUtils";
Enzyme.configure({ adapter: new EnzymeAdapter() })


/**
 * @function
 * @param {object} props 
 * @returns {ShallowWrapper}
 */
const setup = (props) => {
  return shallow(<Congrats {...props} />)
}


test ('renders without error', ()=>{
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'componet-congrats')
  expect (component.length).toBe(1)
})

test ('renders no text when success prop is false', ()=>{
  const wrapper = setup({success: false})
  const component = findByTestAttr(wrapper, 'componet-congrats')
  expect (component.text()).toBe('')
})

test ('renders non-empty congrats message', ()=>{
  const wrapper = setup({success: true})
  const message = findByTestAttr( wrapper, 'congrats-message')
  expect (message.length).not.toBe(0)
})