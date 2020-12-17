import React, {Component} from 'react';
import axios from 'axios'

class Job1soln extends Component{
    constructor(props)
    {   super(props);
         this.state={
            job_soln:props.location.state.soln
            }
         
        
    }

    promptdetails(id){
        axios.get('http://localhost:3001/userdetails/'+id)
        .then(response=>{
            
            alert('Name='+response.data.name+'\nEmail='+response.data.email+'\nMobile Number='+response.data.number)
        })


    }

    render(){
        if(this.state.job_soln.length){
            return(
                
                <table>
                    {this.state.job_soln.map(x=><tr><td>Answer:{x.answer}</td> <td>< button onClick={()=>{this.promptdetails(x.user_id)}} >Get Client Details</button></td></tr>)}
                </table>
            )
        }
        else{
            return(
                <h1>No solution yet</h1>
            )
        }
    }
    
}

export default Job1soln