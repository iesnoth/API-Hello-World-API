require('dotenv').config()
const express = require('express')
const app=express()

app.get(`/`,(req,res)=>{
  res.send('Hello world')
})

const languagesController = require(`./controllers/languages_controller.js`)
app.use(`/languages`,languagesController)

app.listen(process.env.PORT)