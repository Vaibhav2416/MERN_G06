
const fs=require("fs")

// // const data=fs.readFileSync("students.txt")
// console.log("start")
// const data=fs.readFileSync("students.txt","utf-8")

// // console.log(data.toString())
// console.log(data)
// console.log("end")

console.log("start")

fs.readFile("students.txt","utf-8",(error,data)=>{
    if(error){
        console.log(error)
    }
    console.log(data)
})

console.log("End")
// start,end,Anthor student added

fs.unlink("students.txt",(error)=>{
    if(error){
        console.log(error)
    }
})

fs.mkdir("college",(error)=>{if(error)console.log(error)})

fs.readdir("college",(error,files)=>{
    console.log(files)
})