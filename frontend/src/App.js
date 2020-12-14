import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from "./home";
import Navbar from './navbar'
import Login from "./login"
import Register from './register'
import Clientpage from './clientpage';
import Providerpage from './providerpage';
import Job1page from './job1show'
import Job1addpage from './job1add'
import Job1soln from './job1soln'
import Job2page from './job2show'
import Job2addpage from './job2add'
import Job2soln from './job2soln'



const ProtectedRoute = ({component:Component,...rest})=>{
  return(
    <Route 
      {...rest}
            
            component={(props) => (
                <div>
                    <Navbar {...props} /> 
                    <Component {...props} />
                </div>
            )}
        />

  )
}
class App extends Component {

  render(){
    return (
      <Router>
        
          
          <ProtectedRoute exact  path="/" component={Home} />
          <ProtectedRoute exact  path='/login'component={Login}  />
          <ProtectedRoute exact  path='/register' component={Register} />
          <ProtectedRoute exact  path='/clientpage' component={Clientpage} />
          <ProtectedRoute exact  path='/providerpage' component={Providerpage} />
          <ProtectedRoute exact  path='/job1page' component={Job1page}/>
          <ProtectedRoute exact  path='/job1add' component={Job1addpage}/>
          <ProtectedRoute exact  path='/job1soln' component={Job1soln}/>
          <ProtectedRoute exact  path='/job2page' component={Job2page}/>
          <ProtectedRoute exact  path='/job2add' component={Job2addpage}/>
          <ProtectedRoute exact  path='/job2soln' component={Job2soln}/>
          

        
            
        

      </Router>
      
    );
  }
}

export default App;
