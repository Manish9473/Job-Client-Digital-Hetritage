import React, {Component} from 'react';
import './clientpage.css';
import axios from 'axios'


class Clientpage extends Component{
    constructor(props)
    {   super(props);
         this.state={
            newjobs:[],
            oldjobs:[]
            }
    }

    handleRoute(x)
    {   if(x.jobtype=='Description')
        this.props.history.push('/job1page',{id:x._id,title:x.title,img:x.img,description:x.description})
        if(x.jobtype=='Add Images')
        this.props.history.push('/job2page',{id:x._id,title:x.title,description:x.description})
        if(x.jobtype=='Add Annotation')
        this.props.history.push('/job3page',{id:x._id,title:x.title,img:x.img,description:x.description})
    }

    componentDidMount(){

        
        axios.get('http://localhost:3001/getalljobs/' + window.localStorage.getItem('user_id'))
        .then(
            
            response=>{this.setState({newjobs:response.data.new,oldjobs:response.data.old})
             console.log(response.data)
        }
        )

    }

    render(){
        if(this.state.newjobs.length>0||this.state.oldjobs.length>0)
        return(
            <div className="Jobs">
                
                <div className='NewJobs'>
                    <h2>New Jobs</h2>
                    <table>
                        {this.state.newjobs.map(x => <tr><td>Title:{x.title}</td> <td>Jobtype:{x.jobtype} </td> <td><button onClick={()=> this.handleRoute(x)}>Open</button></td></tr>)}
                        
                    </table>
                </div>
                <div className='OldJobs'>
                    <h2>Completed Jobs</h2>
                    <table>
                        {this.state.oldjobs.map(x => <tr><td>Title:{x.title}</td> <td>Jobtype:{x.jobtype} </td> <td><button onClick={()=> this.handleRoute(x)}>Open</button></td></tr>)}
                        
                    </table>
                </div>
            </div>
        )
        else
        return(
            <h1>No Job found</h1>
        )
    }
}

export default Clientpage;