import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

import LoginForm  from './LoginForm/LoginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <LoginForm/>
      </div>
    );
  }
}

export default App;
