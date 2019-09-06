import React from 'react';
import {shallow} from 'enzyme'
import { findByTestAttr, checkProps} from '../Test/TestUtils'
import GuessedWords from './GuessedWords'

const defaultProps = {
  guessedWords: [{guessedWord:'train', letterMatchCount:3}]
}

const setup = (props={defaultProps}) => {
  return shallow(<GuessedWords {...props} />)
}

test ('does not throw warning with expected props',()=>{
  checkProps(GuessedWords, defaultProps)
})

describe ('if there are no words guessed',()=>{
  var wrapper

  beforeEach(()=>{
    wrapper = setup({guessedWords:[]})
  })
  test('renders without error', ()=>{
    const component = findByTestAttr(wrapper, 'component-guessed-words')
    expect (component.length).toBe(1)
  })
  test('renders instructions to guess word', ()=>{
    const instructions = findByTestAttr(wrapper, 'guess-instructions')
    expect (instructions.text().length).not.toBe(0)
  })
})

describe('if there are words guessed', ()=>{
  var wrapper
  const guessedWords = [
    {guessedWord: 'ham', letterMatchCount: 3}, 
    {guessedWord: 'bacon', letterMatchCount: 1}
  ]

  beforeEach(()=>{
    wrapper = setup({guessedWords})
  })

  test('renders without error', ()=>{
    const component =findByTestAttr(wrapper, 'component-guessed-words')
    expect(component.length).toBe(1)
  })
  test('renders guessed words section',()=>{
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words')
    expect(guessedWordsNode.length).toBe(1)
  })
  test('correct number of guessed words', ()=>{
    const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word')
    expect(guessedWordNodes.length).toBe(guessedWords.length)
  })
})