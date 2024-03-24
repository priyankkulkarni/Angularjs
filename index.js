const express =require('express')
const User=require('./config')
const app =express()
app.use(express.json())

app.post("/create",async(req,res)=>{
    const data=req.body
    console.log("Data of Users",data)
    await User.add(data)
    res.send({msg:"Data Added"})
})

app.listen(4000,()=>console.log("Up and running *4000"))
