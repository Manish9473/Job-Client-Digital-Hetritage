import React, {Component} from 'react';
import './App.css';
import axios from 'axios'


class Job2addpage extends Component{
    img_src=''
    state={
        description:String,
        title:String,
        user_id:window.localStorage.getItem('user_id'),
        jobtype:'Add Images'
    }


    handlesubmit(event)
    {
        
        const res=axios.post('http://localhost:3001/savejob2',this.state)
        .then(()=>this.props.history.push('/providerpage'))

        

    }

    render(){
        
        return(
            <div className="Add Job">
                <h1>Add a Job</h1>
                <label>
                    Title
                <input type="text" value={this.state.title} onChange = {(event)=>{this.setState({title:event.target.value})}}/>
                </label>
                <label>
                    Give Description of Images that you want
                     <textarea value={this.state.description} onChange = {(event)=>{this.setState({description:event.target.value})}} width="400" height="200"></textarea>
                </label>
                {/* <label>
                    Image upload
                <input type="file" accept="image/x-png,image/gif,image/jpeg" onChange = {(event)=>{this.setState({img:event.target.files[0]})
                 if(event.target.files!=null)
                 this.img_src=URL.createObjectURL(event.target.files[0])}}/>
                <img src={this.img_src} width="500" height="600"></img>
                </label> */}
                <label>
                    Submit
                    <button on onClick={this.handlesubmit.bind(this)}>Submit</button>
                </label>
                
            </div>
        )
    }
}

export default Job2addpage;