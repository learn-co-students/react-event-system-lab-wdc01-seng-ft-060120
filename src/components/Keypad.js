import React from 'react'
export default class Keypad extends React.Component {
  render() {
    return <input onKeyUp={this.typing} type="password" />
  }

  typing() {
    return console.log("Entering password...")
  }
}