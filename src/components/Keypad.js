import React, { Component } from 'react'

class Keypad extends Component {
  render(){
    return <input onKeyUp={() => console.log('Entering password...')} type="password"></input>
  }
}

export default Keypad