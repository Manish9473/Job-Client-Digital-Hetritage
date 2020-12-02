const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
      type:String
    },
    email:{
      type:String
    },
    pass:{
      type:String
    },
    dob:{
      type:Date
    },
    usertype:{
      type:String
    },
    gender:{
      type:String
    }
  })
  

  module.exports=mongoose.model('user',userSchema)