import React, {Component} from 'react';

import axios from 'axios'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};

    //this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit(event) {
    
    
        axios.post('http://localhost:3001/login', this.state)
        .then(response => {
        console.log(response.data)
        if(response.data.status==="202"){
          window.localStorage.setItem('user_id',response.data.id)
          window.localStorage.setItem('name',response.data.name)
          this.props.history.push('/admin')
         }
        if(response.data.status==="201"){
          window.localStorage.setItem('user_id',response.data.id)
          window.localStorage.setItem('name',response.data.name)
          this.props.history.push('/clientpage')
          
        }
        if(response.data.status==="200"){
          window.localStorage.setItem('user_id',response.data.id)
          window.localStorage.setItem('name',response.data.name)
          this.props.history.push('/providerpage')
         }
        if(response.data.status==="400"){
          alert("Email id password not matched")
        }
        if(response.data.status==="500"){
          alert("Username not found")
        }
      })
      .catch(err => {
        console.error(err);
      });
    event.preventDefault();
}


  render(){
    if(window.localStorage.getItem('user_id')=='')
    return (
      <form onSubmit={this.handleSubmit}>
       
        <label>
          Username:
          <input type="text" placeholder='Username' onChange= {(event) =>{this.state.username=event.target.value}} />
        </label>
        <label>
          Password:
          <input type="password" placeholder='Password' onChange={(event) =>{this.state.password=event.target.value}} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
    else
    return(
      <h1>You are already logged in Please logout</h1>
    )
  }
}

export default Login;