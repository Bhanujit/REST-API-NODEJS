console.log('hi this is backend')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
//middlewares
// app.use('/post',()=>{
//     console.log('hello this the middleware function')
// });
//Routes
//import routes
// middleware
app.use(bodyParser.json())
const postsRoute = require('./routes/posts');

app.use('/post',postsRoute)

//
app.get('/',(req,res)=>{
    res.send('This is home')
})
//database connection
mongoose.connect(process.env.DB_URL,
{useNewUrlParser: true},()=>{
    console.log("conncected to database")
})
//Listening part 
app.listen(2000)