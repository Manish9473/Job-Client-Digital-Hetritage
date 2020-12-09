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
            
            alert('Name='+response.data.name+'\nEmail='+response.data.email)
        })


    }

    render(){
        if(this.state.job_soln.length){
            return(
                
                <ul>
                    {this.state.job_soln.map(x=><li>Answer:{x.answer} < button onClick={()=>{this.promptdetails(x.user_id)}} >Get user Details</button></li>)}
                </ul>
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