import React, {Component} from 'react';

class Jobpage extends Component{
    constructor(props)
    {   super(props);
         this.state={
            job_id:props.location.state.id,
            job_img:props.location.state.img,
            job_title:props.location.state.title,
            job_descryption:props.location.state.description,
            }
    }

    render(){
        return(
            <div className='Job'>
                <h1>Title:{this.state.job_title}</h1>
                <p>Descryption:{this.state.job_descryption}</p>
                <img src={'http://localhost:3001/getimage/'+this.state.job_img} geight='600' width='500'></img>
                <label>
                    Solution:
                    <textarea>Write your solution</textarea>
                </label>


            </div>
        )
    }
}

export default Jobpage