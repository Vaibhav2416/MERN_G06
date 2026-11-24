const express=require("express")
const app=express()
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const SECRET_KEY="PASSKEY"
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
    }
    // jwt.sign("Payload","Secret Key","Expiry Time")
    // payload ==> information that you want to share with client (email,id)
    // secret key => it put stamp on token that it is coming from trusted server
    // Expiry Time => time after token expires
    const token=jwt.sign({"email":user.useremail},SECRET_KEY,{"expiresIn":"1hr"})
    res.send({
        "message":"User Logged In successfully",
        "token":token
    })
})
const authMiddleware=(req,res,next)=>{
    const headers=req.headers.authorization
    // authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtYW5AZ21haWwuY29tIiwiaWF0IjoxNzkxODE3NTM0LCJleHAiOjE3OTE4MjExMzR9.y9hOiZgfruLWQln92-5SXmiBEUGvNVsIIfklc2HgDeg',
    // ["Bearer","token"]
    const token=headers.split(" ")[1]
    const decode=jwt.verify(token,SECRET_KEY)
    if(decode){
        req.body=decode.email
        next()
    }
    else(res.send("User token is invalid"))
}
app.get("/profile",authMiddleware,(req,res)=>{
    // without checking users credentials
    res.send({
        "message":"Welcome to my profile",
        "user":req.body
    })
})
app.get("/accounts",authMiddleware,(req,res)=>{
    res.send("Welcome to account page")
})
app.listen(8000,()=>{
    console.log("Server is running in http://localhost:8000/")
})