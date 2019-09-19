import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'

// @ts-ignore
import css from '../styles/style.css'

class App extends Component {
  constructor(props: any) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>React Redux starter with hot loader!</div>
      )
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'))

export default hot(App)
