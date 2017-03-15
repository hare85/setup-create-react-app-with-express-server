import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { message: '' };
    this.getMessage = this.getMessage.bind(this);
  }

  componentDidMount() {
    this.getMessage();
  }

  async getMessage() {
    try {
      const response = await fetch('/hello');
      const responseJson = await response.json();
      this.setState({ message: responseJson.message });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { message } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{message}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
