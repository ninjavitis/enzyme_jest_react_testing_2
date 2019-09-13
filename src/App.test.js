import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount} from 'enzyme'
import { findByTestAttr } from "../Test/TestUtils";
import HookActions from "./Actions/HookActions";

const mockGetSecretWord = jest.fn()

const setup = (secretWord='party') =>{
  mockGetSecretWord.mockClear()
  HookActions.getSecretWord = mockGetSecretWord

  const mockUseReducer = jest.fn()
  .mockReturnValue([{secretWord}, jest.fn()])

  React.useReducer = mockUseReducer

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
})

describe('secret word is not null',()=>{
  let wrapper
  beforeEach(()=>{
    wrapper = setup("party")
  })

  test('renders app when secret word is not null',()=>{
    const appComponet = findByTestAttr(wrapper, 'component-app')

    expect(appComponet.exists()).toBe(true)
  })
  test('does not render spinner when secret word is not null',()=>{
    const spinnerComponent = findByTestAttr(wrapper, 'spinner')

    expect(spinnerComponent.exists()).toBe(false)
  })
})

describe('secret word is null',()=>{
  let wrapper
  beforeEach(()=>{
    wrapper = setup(null)
  })

  test('does not render app when secret word is null',()=>{
    const appComponet = findByTestAttr(wrapper, 'component-app')

    expect(appComponet.exists()).toBe(false)
  })
  test('renders spinner when secret word is null',()=>{
    const spinnerComponent = findByTestAttr(wrapper, 'spinner')

    expect(spinnerComponent.exists()).toBe(true)
  })
})
