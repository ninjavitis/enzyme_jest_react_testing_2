import React from 'react';
import HookActions from './Actions/HookActions'
import GuessedWords from './GuessedWords'
import Congrats from './Congrats'

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

  return (
    <div data-test="component-app" className="App">
      <h1>Jotto</h1>
      <Congrats success={false} />
      <GuessedWords guessedWords={[]} />
    </div>
  );
}

export default App;
