import React from 'react';

import GuessedWords from './GuessedWords'
import Congrats from './Congrats'

function App() {
  return (
    <div className="App">
      <h1>Jotto</h1>
      <Congrats success={false} />
      <GuessedWords guessedWords={[]} />
    </div>
  );
}

export default App;
