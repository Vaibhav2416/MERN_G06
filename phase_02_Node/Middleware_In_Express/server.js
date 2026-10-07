// Middleware in Express
// Middleware is a function which will act as a barrier/runs between request 
// and response

const express=require("express")
const app=express()
// express can't decide which data is coming, it confuses between file type,json type, etc
// that's why it returns undefined
app.use(express.json()) // to let know express that coming data is json data

const validationMiddleware=(req,res,next)=>{
    const {email,password}=req.body
    if(!email || !password){
        res.send("Enter Credentials first")
    }
    else if(!email.includes("@") || !email.endsWith(".com")){
        res.send("Enter Valid Email")
    }
    else{
        console.log("User is validated")
        next()  // this will proceed req to the next middleware
    }
}
const authMiddleware=(req,res,next)=>{
    const {email,password}=req.body

    const useremail="user@gmail.com"
    const userpassword="123"
    if(email==useremail && password==userpassword){
        next()
    }
    else{
        res.status(400).send("Please enter valid email and password")
    }
}
app.get("/",(req,res)=>{
    res.send("Welcome to homepage")
})
// app.use(validationMiddleware) // apply middleware by this method if we want to connect this with whole application

// app.use(authMiddleware)
app.get("/profile",validationMiddleware,authMiddleware,(req,res)=>{
    res.send("Welcome to my profile page")
})

app.get("/contact",(req,res)=>{
    res.send("Welcome to contact page")
})

app.listen(8000,()=>{
    console.log("Server is running in http://localhost:8000/")
})


