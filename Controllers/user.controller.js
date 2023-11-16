const userModel = require("../Models/user.model")
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET
const userWelcome=(req, res)=>{
    res.send('Hello Adelekan ayoola ')
    console.log("welcome");
}
const signUp=(req, res)=>{
    console.log('Router at sign up page');
    let saveUser = new userModel (req.body)
    console.log(req.body);
    saveUser.save().then(()=>{
        console.log('save to database successfully');
        res.send({statue:true, message: "User signup successful"})
    }).catch((err)=>{
        console.log('There is an error',err);
        res.send({statue:false, message: "user not save"})
    })
}

const logIn= async(req, res)=>{
    const {email, password}=req.body
  try {
    const user = await userModel.findOne({email, password});
    if (!user) {
      console.log('User not found');
      // res.status(401).send('Authentication failed');
      res.send({message:"Login failed"})
    } else {
      console.log(user);
      console.log('Successfully logged in');
      let token = jwt.sign({email}, SECRET, {expiresIn: "1h"})
      res.send({message:"Login suceessful", token:token})
    }
  } catch (err) {
    console.log('Error while trying to log in:', err);
    res.status(500).send('Internal Server Error');
  }
}
const dash=(req, res)=>{
  console.log(req.headers);
  let token = req.headers.authorization.split(" ")[1];
    // res.send({message:"welcome to dashboard"})
    jwt.verify(token, SECRET, ((err, result)=>{
      if(err){
        res.send({statue:false, message: "Cant authorize user"})
      }
      else{
        console.log(result);
        res.send({status:true, message:"token is correct", result})
      }
    }))
}
module.exports= {userWelcome, signUp, logIn, dash}