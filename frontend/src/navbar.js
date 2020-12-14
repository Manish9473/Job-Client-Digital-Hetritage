import React, {Component} from 'react';
import './home.css';

class Navbar extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      log_state:"Login",
      log_name:''
    }
  }

  handlelogin()
  {
    if(this.state.log_state=='Logout')
    {
      window.localStorage.setItem('user_id','')
      window.localStorage.setItem('name','')
      this.props.history.push('./login')
      
    }
    else
    {
      this.props.history.push('./login')
    }
  }

  componentDidMount()
  {
    if(window.localStorage.getItem('user_id')!='')
    {
      this.setState({log_state:'Logout',log_name:<h2>Welcome {window.localStorage.getItem('name')}</h2>})
    }
    else
    {
      this.setState({log_state:'Login',log_name:''})
    }
  }
  render(){
    return (

        <div className="Navbar">
          <div className='Welcome'>
            {this.state.log_name}
          </div>
          <button onClick={()=> this.props.history.push('/register')}>Register</button>
          <button onClick={()=> this.handlelogin()} >{this.state.log_state}</button>
          <button onClick={()=> this.props.history.push('./')}>Home</button>
          <button >Admin</button>
        </div>
    )
  
   }
}

export default Navbar;