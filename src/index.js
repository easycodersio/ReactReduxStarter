import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Load stylesheet in app
import css from '../styles/style.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render () {
    return (
      <div>React Redux starter with hot loader</div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));

module.hot.accept()
