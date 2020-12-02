import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from "./home";
import Login from "./login"
import Register from './register'
import Clientpage from './clientpage';
import Providerpage from './providerpage';


class App extends Component {

  render(){
    return (
      <Router>
        
          
          <Route exact  path="/" component={Home} />
          <Route exact  path='/login'component={Login}  />
          <Route exact  path='/register' component={Register} />
          <Route exact  path='/clientpage' component={Clientpage} />
          <Route exact  path='/providerpage' component={Providerpage} />

        
            
        

      </Router>
      
    );
  }
}

export default App;
