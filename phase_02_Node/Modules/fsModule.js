// fs ==> this module handles files
const fs=require("fs")
// read,write,append,delete
let text="Student Name:Aman"
console.log("start")
fs.writeFileSync("students.txt","Another Student Added")
// fs.writeFile("students.txt",text,(error)=>{
//     if(error){
//       return console.log("Error is",error)
//     }
//     console.log("Text added")
// })
console.log("end")