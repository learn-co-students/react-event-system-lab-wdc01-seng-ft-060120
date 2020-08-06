import React from 'react'


const KeyPad = (props) =>
{
  return(
    <input type="password" onKeyUp={() => {console.log("Entering password...")}}/>
  )
}

export default KeyPad;