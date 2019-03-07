import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios'

class App extends Component {

  state = {
    have: 'LOADING'
  }

  componentDidMount() {
    axios.get('http://localhost:5000/').then((res) => {
      this.setState({ have: res.data.have })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            HAVE: {this.state.have} !
          </p>
        </header>
      </div>
    );
  }
}

export default App;
