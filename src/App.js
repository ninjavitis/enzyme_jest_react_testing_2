import React from 'react';
import HookActions from './Actions/HookActions'
import GuessedWords from './GuessedWords'
import Congrats from './Congrats'

import Input from './Components/Input'

function reducer(state, action){
  switch(action.type){
    case "setSecretWord":
      return {...state, secretWord: action.payload}

    default:
      throw new Error(`invalid action type ${action.type}`)
  }
}


function App() {
  const [state,dispatch] = React.useReducer(reducer,{secretWord:null})

  const setSecretWord = (secretWord) => dispatch({type:'setSecretWord', payload:secretWord})

  React.useEffect(()=>{
    HookActions.getSecretWord(setSecretWord)
  },[])

  if (!state.secretWord){
    return(
      <div data-test="spinner">
        This is a spinner
      </div>
    )
  }
    return (
      <div data-test="component-app" className="App">
        <h1>Jotto</h1>
        <Input secretWord={state.secretWord} />
        <Congrats success={false} />
        <GuessedWords guessedWords={[]} />
      </div>
    );
}

export default App;
