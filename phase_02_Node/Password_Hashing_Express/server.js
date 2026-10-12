const express=require("express")
const app=express()
const bcrypt=require("bcrypt")
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Welcome to homepage")
})
let user={}  // temporory database
app.post("/register",async(req,res)=>{
    const {email,password}=req.body 
    user={
        useremail:email,
        userpassword:await bcrypt.hash(password,10)
    }
    // bcrypt.hash(originalpw,salt_rounds)
    // salt_rounds => 10 ==> very strong complex password
    //                1 ==> less complex password
    res.send(`${JSON.stringify(user)} registered successfully`)
})
app.post("/login",async(req,res)=>{
    const {email,password}=req.body
    if(email!==user.useremail){
        res.send("Email does not exists")
    }
    const check_user=await bcrypt.compare(password,user.userpassword)
    // bcrypt.compare will return true or false based on credentials
    if(!check_user){
        res.send("Password doesn't match")
    }else{
        res.send("User Logged In Successfully")
    }
})
app.listen(8000,()=>{
    console.log("Server is running in http://localhost:8000/")
})