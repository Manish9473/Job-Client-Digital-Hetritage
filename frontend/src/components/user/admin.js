import React, {Component} from 'react';

import axios from 'axios'


class Admin extends Component{
    constructor(props){
        super(props)
        this.state={
            job_types:[],
            users:[]
        }
        this.jobtype={
            title:'',
            route:''
        }
        this.jobs={
            job1:Int32Array,
            job2:Int32Array,
            job3:Int32Array

        }
    }
    componentDidMount(){
        axios.get('http://localhost:3001/getjobdetails')
        .then((response)=>{
            this.jobs.job1=response.data.job1;
            this.jobs.job2=response.data.job2;
            this.jobs.job3=response.data.job3
        })
        axios.get('http://localhost:3001/alluserdetails')
        .then(response=>{
            this.setState({users:response.data})
        })
        axios.get('http://localhost:3001/getjobtype')
        .then((response)=>{this.setState({job_types:response.data})})
        axios.get('http://localhost:3001/getjobdetails')
        .then((response)=>{
            this.jobs.job1=response.data.job1;
            this.jobs.job2=response.data.job2;
            this.jobs.job3=response.data.job3
        })
    }
    givedetails(x)
    {
        if(x.usertype=="Client")
        {
            axios.post('http://localhost:3001/getclientdetails',{'id':x._id})
            .then(response=>{
            
                alert('Descryption jobs Completed='+response.data.job1+'\nAdd Image Job Completed='+response.data.job2+'\nAnnotation Job Completed='+response.data.job3)
            })
        }
        if(x.usertype=="Provider")
        {
            axios.post('http://localhost:3001/getproviderdetails',{'id':x._id})
            .then(response=>{
            
                alert('Descryption jobs='+response.data.job1+'\nAdd Image Job='+response.data.job2+'\nAnnotation Job='+response.data.job3)
            })
        }
    }
    handlesubmit(){
        axios.post('http://localhost:3001/savejobtype',this.jobtype)
        .then((response)=>{
            this.jobtype.title='';
            this.jobtype.route='';
            this.setState({job_types:response.data})
            
        })
        
        
    }
    handledelete(id){
        axios.post('http://localhost:3001/deletejobtype',{'id':id})
        .then((response)=>this.setState({job_types:response.data}))
    }
    render(){
        if(localStorage.getItem('name')=='admin')
        return(
            <div className="Admin">
                
                <div className="jobtype">
                    <table>
                        <tr>
                            <th>Jobtype title</th>
                            <th>Jobtype route</th>
                            <th>Delete</th>
                        </tr>
                        {this.state.job_types.map(x=>
                            <tr>
                                <td>{x.title}</td>
                                <td>{x.route}</td>
                                <td><button onClick={()=>{this.handledelete(x._id)}}>Delete</button></td>
                            </tr>  
                                )
                        }
                    </table>

                </div>
                <div className="Addjobtype">
                        <h4>Enter jobtype title</h4>
                        <input type="text"  placeholder={this.jobtype.title} onChange={(event)=>this.jobtype.title=event.target.value}/>
                        
                        <h4>Enter route</h4>
                        <input type="text"  placeholder={this.jobtype.route} onChange={(event)=>this.jobtype.route=event.target.value}/>
                        
                    
                    <button onClick={()=>{this.handlesubmit()}}>Add Jotype</button>

                </div>
                <div ClassName="Details">
                    <h2>Total Number of Users= {this.state.users.length}</h2>
                    <h2>Total Number of Jobs= {this.jobs.job1+this.jobs.job2+this.jobs.job3}</h2>
                    <h2>Total Number of Description Jobs= {this.jobs.job1}</h2>
                    <h2>Total Number of Add Images Jobs= {this.jobs.job2}</h2>
                    <h2>Total Number of Annnotation Jobs= {this.jobs.job3}</h2>



                </div>
                <div className="Users Details">
                    <table>
                        <tr>
                            <th>User id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mob Number</th>
                            <th>Education</th>
                            <th>Gender</th>
                            <th>DOB</th>
                            <th>Type of User</th>
                            <th>Get Details</th>
                        </tr>
                        {this.state.users.map(x=>
                        <tr>
                            <td>{x._id}</td>
                            <td>{x.name}</td>
                            <td>{x.email}</td>
                            <td>{x.number}</td>
                            <td>{x.education}</td>
                            <td>{x.gender}</td>
                            <td>{x.dob}</td>
                            <td>{x.usertype}</td>
                            <td><button onClick={()=>{this.givedetails(x)}}>Submission details</button></td>
                            
                        </tr>)}
                    </table>
                </div>
            </div>   
            
        )
        else
        {
            return(
                <h1>Not A Admin</h1>
            )
        }
    }
}

export default Admin;