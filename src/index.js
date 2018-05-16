import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader'

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