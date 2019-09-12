import React from 'react';
import PropTypes from 'prop-types'


const Input =(props,{secretWord})=>{
  // useState is being used as a property of React rather than destrucuring the default export
  // this is for mocking compatibility
  const [currentGuess, setCurrentGuess] = React.useState('')

  return(
    <div data-test="input-component">
      <form className="form-inline">
        <input 
          data-test="input-box" 
          type="text" 
          placeholder="Enter Guess"
          value ={currentGuess}
          onChange={(e)=>setCurrentGuess(e.target.value)}
        />
        <button  data-test="input-button" >Submit</button>
      </form>
    </div>
  )
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
}

export default Input