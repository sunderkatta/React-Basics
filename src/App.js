import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const divStyle = {
      marginLeft: 150,
    }
    return (
      <div style={divStyle}> 
        {5===5 ? 'This is 5': 'not a 5'}
        <h1 style={{color: 'red',}}>Hello Welcome to React World...</h1>
      </div>
    );
  }
}

export default App;
