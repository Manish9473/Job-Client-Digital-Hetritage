import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from "./home";
import axios from 'axios'



class Register extends Component {


  constructor(props) {
    super(props);
    this.state = {username: '', password: '',email:'',dob:'',gender:'',user_type:''}
    this.handleSubmit = this.handleSubmit.bind(this);
  }



 handleSubmit(event) {
    
    
  const response=axios.post('http://localhost:3001/register', this.state)
      .then(response => {
        if(response.data===800)
        {
          alert("Email id already registered")
        }
        if(response.data===200)
        {
          alert("Registration complete")
          this.props.history.push('/login')
        }
      })
      .catch(err => {
        console.error(err);
      });
    console.log(this.state)
    event.preventDefault();
}

  render(){
    return (
      
        <div className="LoginBox">  
          <h1>Welcome to register</h1>
          <button onClick={()=> this.props.history.push('/')}>Home</button>

          <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" placeholder="Username"  onChange= {(event) =>{this.state.username=event.target.value}} required />
          </label>
          
          <label>
            Email:
            <input type="email" placeholder="Email" onChange= {(event) =>{this.state.email=event.target.value}} required />
          </label>

          <label>
            Password:
            <input type="Password" placeholder="Password" onChange={(event) =>{this.state.password=event.target.value}} required />
          </label>

          <label>
            Date_of_Birth:
            <input type="date" placeholder="DOB" onChange={(event) =>{this.state.dob=event.target.value}} required />
          </label>

          <div  onChange={(event)=>{this.state.gender=event.target.value}} >
            <label>
                Gender
                <input type="radio" value="MALE" name="gender" required/> Male
                <input type="radio" value="FEMALE" name="gender"required/> Female
            </label>
          </div>

          <div  onChange={(event)=>{this.state.user_type=event.target.value}} required>
            <label>
                Type of User
                <input type="radio" value="Provider" name="user_type" required/> Provider
                <input type="radio" value="Client" name="user_type" required/> Client
            </label>
          </div>

          <input type="submit" value="Submit" />
        </form>
        
        
      </div>
    );
  }
}

export default Register;