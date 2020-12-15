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
            
            alert('Name='+response.data.name +'\nEmail='+response.data.email +'\nMobile Number='+response.data.number)
        })


    }

    render(){
        console.log(this.state.job_soln)
        if(this.state.job_soln.length){
            return(
                
                <ol>
                    {this.state.job_soln.map(x=><li>Images:<ul>{x.image.map(img=><li><a target='_blank' href={'http://localhost:3001/getimage/'+img} >{img}</a></li>)}</ul> < button onClick={()=>{this.promptdetails(x.user_id)}} >Get user Details</button></li>)}
                </ol>
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