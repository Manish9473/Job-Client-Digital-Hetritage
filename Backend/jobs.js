const { Int32 } = require('mongodb')
const mongoose=require('mongoose')

const JobSchema=new mongoose.Schema({
    title:{
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
    soln:{
      type:[]
    }
  })
  

  module.exports=mongoose.model('jobs',JobSchema)