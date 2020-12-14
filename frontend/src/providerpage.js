import React, {Component} from 'react';
import './App.css';
import axios from 'axios'


class Providerpage extends Component{
    constructor(props)
    {   super(props);
         this.state={
            jobs:[]
            }
    }

    async deletejob(id){
        await axios.post('http://localhost:3001/deletejob/',{'id':id})
        .then(this.setState({jobs:[]}))
    }

    componentDidMount(){

        
        axios.get('http://localhost:3001/getjobs/' + window.localStorage.getItem('user_id'))
        .then(
            response=>{this.setState({jobs:response.data})
             console.log("cdm",response.data)
        }
        )

    }

    render(){
        console.log(this.state.jobs)
        if(this.state.jobs.length>0)
        return(
            <div className='Jobs'>
                <button onClick={()=>{this.props.history.push('/job1add')}}>Get descryption of Images</button>
                <button onClick={()=>{this.props.history.push('/job2add')}}>Get Images</button>
                <button onClick={()=>{this.props.history.push('/job1add')}}>Annotate Images</button>
                
                <h1>Jobs are</h1>
                <ul>
                    {this.state.jobs.map(x => <li>Title:{x.title} Jobtype:{x.jobtype}
                    <button onClick={()=>this.props.history.push('/job1soln',{soln:x.soln})}>Solutions</button> 
                    <button onClick={()=>{this.deletejob(x._id)}}>Delete</button></li>)}
                    {/* Jobs:{this.state.jobs} */}
                </ul>
            </div>
        )
        else
        return(
            <div className='jobs'>
                <button onClick={()=>{this.props.history.push('/job1add')}}>Get descryption of Images</button>
                <button onClick={()=>{this.props.history.push('/job2add')}}>Get Images of events</button>
                <button onClick={()=>{this.props.history.push('/job1add')}}>Annotate and write descyption</button>
                <h1>Currently no Jobs Assigned </h1>
            </div>
        )
    }
}

export default Providerpage;