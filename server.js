const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()
const router=require("./routes")
app.use(cors())

mongoose.connect("mongodb://localhost:27017/task").then(()=>{
    console.log("db connected")
}).catch((err)=>{
    console.log(err)
})
mongoose.set('strictQuery', false)
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(router)
app.listen(8000,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("server starts at 8000")
    }
})