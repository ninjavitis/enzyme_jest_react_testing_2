import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount} from 'enzyme'
import { findByTestAttr } from "../Test/TestUtils";
import HookActions from "./Actions/HookActions";

const mockGetSecretWord = jest.fn()

const setup = () =>{
  mockGetSecretWord.mockClear()
  HookActions.getSecretWord = mockGetSecretWord

  // use effect is not called on shallow due to enzyme-2086
  return mount(<App />)
}

it('renders without crashing', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-app')
  expect(component.length).toBe(1)
});

describe('',()=>{
  test('getSecretWord is called on app mount',()=>{
    setup()
    expect(mockGetSecretWord).toHaveBeenCalled()
  })
  test('that secretWord does not update on app update',()=>{
    const wrapper = setup()
    mockGetSecretWord.mockClear()

    wrapper.setProps()
    expect(mockGetSecretWord).not.toHaveBeenCalled()
  })
  //test('',()=>{expect()})

})
