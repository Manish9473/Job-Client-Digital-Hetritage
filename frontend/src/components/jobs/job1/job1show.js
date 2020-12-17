import axios from 'axios';
import React, {Component} from 'react';

class Job1page extends Component{
    constructor(props)
    {   super(props);
         this.state={
            job_id:props.location.state.id,
            job_img:props.location.state.img,
            job_title:props.location.state.title,
            job_descryption:props.location.state.description,
            }
         
        this.soln={
            job_id:props.location.state.id,
            user_id:window.localStorage.getItem('user_id'),
            answer:''
        }
    }

    handlesubmit(){
        axios.post('http://localhost:3001/savesoln1',this.soln)
        .then(()=>{this.props.history.push('/clientpage')})
    }

    render(){
        return(
            <div className='Job'>
                <h1>Title:{this.state.job_title}</h1>
                <p>Descryption:{this.state.job_descryption}</p>
                <img src={'http://localhost:3001/getimage/'+this.state.job_img} height='600' width='500'></img>
                <label>
                    Solution:
                    <textarea onChange={event=>{this.soln.answer=event.target.value}}>Write your solution</textarea>
                </label>
                <button onClick={event=>{this.handlesubmit()}}>Submit Job</button>

            </div>
        )
    }
}

export default Job1page