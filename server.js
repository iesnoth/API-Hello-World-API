require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.urlencoded({extended: true}))

app.get(`/`, (req, res) => {
  res.send('Hello world')
})
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

const languagesController = require(`./controllers/languages_controller.js`)
app.use(`/languages`, languagesController)

app.listen(process.env.PORT)