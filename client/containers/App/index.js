
import React, { Component } from 'react'
import './style.styl'

export default class App extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="app">
        {children}
        hello hackNTU!
      </div>
    )
  }
}