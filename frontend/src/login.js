import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Register from './register'
import axios from 'axios'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};

    //this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit(event) {
    
    
    const response=axios.post('http://localhost:3001/login', this.state)
      .then(response => {
        if(response.data===201){
          this.props.history.push('/clientpage')
        }
        if(response.data===200){
          this.props.history.push('/providerpage')
        }
        if(response.data===400){
          alert("Email id password not matched")
        }
        if(response.data===500){
          alert("Username not found")
        }
      })
      .catch(err => {
        console.error(err);
      });
    event.preventDefault();
}


  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text"  onChange= {(event) =>{this.state.username=event.target.value}} />
        </label>
        <label>
          Password:
          <input type="password"  onChange={(event) =>{this.state.password=event.target.value}} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Login;