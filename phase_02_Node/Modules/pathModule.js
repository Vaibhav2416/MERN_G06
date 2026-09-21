// Common Module
// ES6 module

// const filePath=require("./college/new_folder/students.js")
//   \ /
// user ==> macos/linux

const path=require("path")

const filePath=path.join("college","new_folder","students.js")
console.log(filePath)
console.log(path.basename(filePath))
console.log(path.dirname(filePath))
