import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from "./home";
import Login from "./login"
import Register from './register'
import Clientpage from './clientpage';
import Providerpage from './providerpage';
import Job1page from './job1show'
import Job1addpage from './job1add'
import Job1soln from './job1soln'
class App extends Component {

  render(){
    return (
      <Router>
        
          
          <Route exact  path="/" component={Home} />
          <Route exact  path='/login'component={Login}  />
          <Route exact  path='/register' component={Register} />
          <Route exact  path='/clientpage' component={Clientpage} />
          <Route exact  path='/providerpage' component={Providerpage} />
          <Route exact  path='/jobpage' component={Job1page}/>
          <Route exact  path='/job1add' component={Job1addpage}/>
          <Route exact  path='/job1soln' component={Job1soln}/>


        
            
        

      </Router>
      
    );
  }
}

export default App;
