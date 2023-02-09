const { Router } = require('express')
// const express=require('express')
const router = Router()
const taskData = require('./models')

//post requests

router.post("POST /v1/tasks", (req, res) => {
    taskData.create({
        title: req.body,
        is_completed: req.body
    }).then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log(err)
    })
})
//get request
router.get("GET /v1/tasks", (req, res) => {
    taskData.find().then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log(err)
    })
})
module.exports = router