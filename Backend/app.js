const express = require('express')
const app = express()
const cors = require('cors');
const logger = require('morgan');
const mongoose=require('mongoose')
const multer=require('multer')
const path=require('path')
const url= 'mongodb://localhost/btp20'
const userSchema=require('./user')
const jobSchema=require('./jobs');
const { ObjectId } = require('mongodb');


app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 3001

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
      cb(null, file.originalname);
  }
});
const upload=multer({storage:storage})
mongoose.connect(url,{useNewUrlParser:true})
const con =mongoose.connection

con.on('open',()=>{
  console.log('database connected')
})


app.get('/getimage/:img', (req, res) => {
  res.sendFile('C:/Users/hp/Desktop/BTP20/Backend/uploads/'+req.params.img)
  //window.localStorage.setItem('name','manish')
})

app.post('/savejob',upload.single("image"),async (req,res)=>
{
   const job=new jobSchema({
     title:req.body.title,
     description:req.body.description,
     jobtype:req.body.jobtype,
     img:req.file.originalname,
     user_id:req.body.user_id
   })
   try{

    const r= await job.save()
    res.send(r)
    res.end('end')
    
  }
  catch{
  res.send(req.body)
  res.end('End')
  }


})


app.get('/getjobs/:user_id',async (req,res)=>{
  var jobs= await jobSchema.find({'user_id':req.params.user_id})
  res.send(jobs)
  res.end()
})

app.get('/getalljobs/:user_id',async (req,res)=>{
  const jobs= await jobSchema.find()
  var newjobs=[];
  for(var i=0;i<jobs.length;i++)
  {
    var f=0;
    for(var j=0;j<jobs[i].soln.length;j++)
    {
      if(jobs[i].soln[j].user_id===req.params.user_id)
      {
        f=1;
        break;
      }
    }
    if(f==0)
    {
      newjobs.push(jobs[i])
    }
    
  }
  console.log(newjobs)
  res.send(newjobs)
  res.end()
})

app.post('/deletejob',async (req,res)=>{
 await jobSchema.remove({'_id':ObjectId(req.body.id)})
 res.send("deleted")
 res.end()
})

app.post('/savesoln',async (req,res)=>{
  
  // await job.soln.push(req.body)
  // await job.save()
  //console.log(req.body)
  await jobSchema.updateOne({'_id':req.body.job_id},{$push:{soln:{user_id:req.body.user_id,answer:req.body.answer}}})
  res.send("Updated")
  res.end()
})

app.post('/login', async (req,res) =>{

  const user= await userSchema.find({"email":req.body.username})
  //console.log(user[0].pass,req.body.password)
  if(user.length==0)
  {
    res.send({status:"500"})
  }
  else
  {
    if(user[0].pass==req.body.password && user[0].usertype==="Provider")
    res.send({status:"200",id:user[0]._id})
    else
      if(user[0].pass==req.body.password && user[0].usertype==="Client")
      res.send({status:"201",id:user[0]._id})
    else
    res.send({status:"400"})
  }
  

})


app.post('/register', async (req,res) =>{
  
  const users= await userSchema.find({"email":req.body.email})
  if(users.length==0)
{
    const user=new userSchema({
    name:req.body.username,
    email:req.body.email,
    pass:req.body.password,
    dob:req.body.dob,
    usertype:req.body.user_type,
    gender:req.body.gender

  })
  try{

    const r= await user.save()
    res.send("200")
    res.end('end')
    
  }
  catch{
  res.send(req.body)
  res.end('End')
  }
}

else{

  res.send("800")
  res.end('end')
}
  
  })

app.get('/userdetails/:id',async (req,res)=>{

  const user= await userSchema.find({"_id":req.params.id})
  res.send({name:user[0].name,email:user[0].email})
  res.end()


})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})