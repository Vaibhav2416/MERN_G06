const express=require("express")  // imported express framework
const fs=require("fs")
// const { json } = require("stream/consumers")
const app=express() // created express app here
// get,post,put,delete,patch
app.use(express.json()) // this is reading json-data from client
app.get("/",(req,res)=>{
    res.send("Welcome to Express Application")
})

app.get("/students",(req,res)=>{
    const data=fs.readFileSync("students.json","utf-8")
    const students=JSON.parse(data) // converting json string into 
    // javascript object
    res.send(students)
})

app.post("/students",(req,res)=>{
    const data=fs.readFileSync("students.json","utf-8")
    const students=JSON.parse(data) 
    console.log(students)
    // console.log(req.body) [{"name":"Aman"},{"name":"Yogesh"}]
    const newStudent={"id":students.length+1,...req.body} 
    // {"id":4,"name":"yogesh"}
    students.push(newStudent)
    fs.writeFileSync("students.json",JSON.stringify(students))
    res.send("Student Submitted Successfully")
})

app.listen(8080,()=>{
    console.log("Server is running in http://localhost:8080/")
})

// Create Read 

