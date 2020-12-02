import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from "./login"
import Register from './register'
class Home extends Component {

  render(){
    return (
      <Router>
        <h1>Home</h1>
        
        
        <button onClick={()=> this.props.history.push('/register')}>Register</button>
        <button onClick={()=> this.props.history.push('/login')}>Login</button>
        
      </Router>
    );
  }
}

export default Home;