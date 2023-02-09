const mongoose=require("mongoose")
const data=new mongoose.Schema({
    title:{
        type:String
    },
    is_completed:{
        type:Boolean
    }
})
const taskData=new mongoose.model("taskApi",data)
module.exports=taskData