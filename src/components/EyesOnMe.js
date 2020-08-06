import React from 'react'

const EyesOnMe = (props) =>
{
  return( 
    <button onFocus={() => console.log("Good!")}
            onBlur={() => console.log("Hey! Eyes on me!")}
    ></button> 
  )
}

export default EyesOnMe;