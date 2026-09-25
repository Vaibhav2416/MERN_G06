const express=require("express")
const app=express()
const fs=require("fs")

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome to homepage")
})
// GET and POST request on users route
app.get("/users",(req,res)=>{
    const data=fs.readFileSync("db.json","utf-8")
    const users=JSON.parse(data)
    res.send(users)
})
app.post("/users",(req,res)=>{
    const data=fs.readFileSync("db.json","utf-8")
    const users_array=JSON.parse(data)
    const newUser={...req.body,id:users_array.users.length+1}
    // find =>to check whether user email already exists or not
    const check_user=users_array.users.some((el)=>el.email==req.body.email)
    if(check_user){
        res.send("User Already Exists")
    }
    else{
        users_array.users.push(newUser) //[{name:aman},{name:"kartik"}]
        fs.writeFileSync("db.json",JSON.stringify(users_array))
        res.send("User Added Successfully, Please check db.json")
    }
})

// Get Single User
app.get("/users/:id",(req,res)=>{
    // params contains key value pair object in which all keys 
    // will be word written infront of : (colon)
    // req.params => {"id":1,"subID":2}
    const userId=+req.params.id // + will convert string into number
    // console.log(typeof(userId))
    const data=fs.readFileSync("db.json","utf-8")
    const users_array=JSON.parse(data)
    const find_user=users_array.users.find((el)=>el.id==userId)
    if(find_user){
        res.send(find_user)
    }
    else{
        res.send("User Does not Exists in database")
    }
})

app.delete("/users/:id",(req,res)=>{
    const userId=+req.params.id
    const data=fs.readFileSync("db.json","utf-8")
    const users_array=JSON.parse(data)
    // [{id:1,name:"aman"},{id:2,"name":kartik}]
    // urlID =>1 => aman in database
    // filter => returns new array =>urlId!= user_array.id=>
    const deleted_data=users_array.users.filter((el)=>el.id!=userId)// users:[]
    users_array.users=deleted_data
    fs.writeFileSync("db.json",JSON.stringify(users_array))
    res.send("User Deleted Successfully")
})

app.put("/users/:id",(req,res)=>{
    const userId=+req.params.id 
    const data=fs.readFileSync("db.json","utf-8")
    const users_array=JSON.parse(data)
    console.log(userId)
    const find_user=users_array.users.find((el)=>el.id==userId)
    if(find_user){
        find_user.name=req.body.name
        find_user.email=req.body.email
        fs.writeFileSync("db.json",JSON.stringify(users_array))
        res.send("User Updated Successfully")
    }
    else{
        res.send("User Does Not Exists")
    }
})

app.listen(8080,()=>{
    console.log("Server is running in http://localhost:8080")
})