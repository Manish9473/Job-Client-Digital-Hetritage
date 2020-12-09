const { Int32 } = require('mongodb')
const mongoose=require('mongoose')

const JobSchema=new mongoose.Schema({
    title:{
      type:String
    },
    user_id:{
      type:String
    },
    jobtype:{
      type:String
    },
    description:{
      type:String
    },
    img:{
      type:String
    },
    soln: [{user_id:String,answer:String}]
    
  })
  

  module.exports=mongoose.model('jobs',JobSchema)