import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes.js'
import { NavLink, withRouter } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
          <nav>
          <NavLink exact to="/beers"> Beers </NavLink>  
          <NavLink  to="/random"> Random </NavLink>  
          <NavLink to="/new"> New </NavLink> 
        </nav> 
        <Routes/>
      </div>
    );
  }
}

export default App;
