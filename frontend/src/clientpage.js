import React, {Component} from 'react';
import './App.css';
import axios from 'axios'


class Clientpage extends Component{
    constructor(props)
    {   super(props);
         this.state={
            jobs:[]
            }
    }

    componentDidMount(){

        
        axios.get('http://localhost:3001/getjobs')
        .then(
            response=>{this.setState({jobs:response.data})
            // console.log(json.data)
        }
        )

    }

    render(){
        if(this.state.jobs!=null)
        return(
            
            <ul>
                {this.state.jobs.map(x => <li>Title:{x.title} Jobtype:{x.jobtype}<button onClick={()=>this.props.history.push('/jobpage',{id:x._id,title:x.title,img:x.img,description:x.description})}>Open</button></li>)}
                {/* Jobs:{this.state.jobs} */}
            </ul>
        )
        else
        return(
            <h1>No Job found</h1>
        )
    }
}

export default Clientpage;