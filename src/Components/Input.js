import React from 'react';
import PropTypes from 'prop-types'


const Input =(props,{secretWord})=>{

  return(
    <div data-test="input-component"/>
  )
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
}

export default Input