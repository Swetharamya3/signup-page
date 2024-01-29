const mongoose=require('mongoose');
const connect=mongoose.connect("mongodb://localhost:27017/new");

connect.then(()=>{
    console.log("database created successfully");
})
.catch(()=>{
    console.log("database cannot be created ");
});

const LoginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    con_password:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    }
});

const collection=new mongoose.model("details",LoginSchema);

module.exports=collection;



















