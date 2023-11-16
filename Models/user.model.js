const mongoose= require('mongoose')
const bcrypt = require('bcrypt')
let userInputType= mongoose.Schema({
    fullname:String,
    phoneno:String,
    email:{type:String, unique: true, require: true},
    password:String
})
// let saltRound = 10
// userInputType.pre('save', function(next){
//     bcrypt.hash(this.password, saltRound,(err, hash)=>{      
//         // console.log(this.password);
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log(hash);
//             this.password=hash
//             next()
//         }
//     })
// })
let setDatabase= mongoose.model("backend", userInputType)
module.exports = setDatabase

