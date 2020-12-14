import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from "./navbar";
import axios from 'axios'



class Register extends Component {


  constructor(props) {
    super(props);
    this.state = {username: '', password: '',email:'',dob:'',gender:'',user_type:'',number:'',education:''}
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
            Mobile Number:
            <input type="Number" placeholder="Number" onChange= {(event) =>{this.state.number=event.target.value}} required />
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
          <label>
            Education Quallification
              <select onChange={(event=>{this.state.education=event.target.value})} defaultValue="School" id = "dropdown">
                
                <option value="School">School</option>
                <option value="High School">High School</option>
                <option value="Graduate">Graduate</option>
                <option value="Post Graduate">Post Graduate</option>
              </select>
          </label>

          <input type="submit" value="Submit" />
        </form>
        
        
      </div>
    );
  }
}

export default Register;