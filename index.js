const express = require("express")
const app = express()
const mongoose= require('mongoose')
const env = require('dotenv').config()
PORT=process.env.PORT||5500
URI=process.env.URI
const userRouter = require("./Routes/user.route")
const cors = require('cors')

mongoose.connect(URI)
.then(()=>{
    console.log("wow mongo db is connected");
}).catch((err)=>{
    console.log(err);
})
app.listen(PORT,()=>{
    console.log('server is running',PORT);
})

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/user", userRouter)