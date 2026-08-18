// Javascript is a single threaded language
// Synchronous programming

console.log("start")

// I want to get some data from API


// let fetchData=async()=>{
//     try {
//         let resp=await fetch("https://dummyjson.com/products") 
//         let json_products=await resp.json()
//         console.log(json_products)
//     } catch (error) {
//         console.log("Error here is ",error)
//     }
// }
// fetchData()
// 2018 

// .then method to fetch api

// let resp=fetch("https://dummyjson.com/products").then((response)=>{
//     return response.json()
// }).then((json_products)=>{
//     console.log(json_products)
//     return fetch("https://dummyjson.com/recipes")
// }).then((response)=>response.json())
// .then((json_recipes)=>console.log(json_recipes))
// .catch((error)=>console.log(error))

// On single page
// First ==> user data ==> order details

// .then(`userData/id`).then(`OrderDetails/userId`)

// fetch=>consume some time
//     => js gives this task to browser
//     => this will return promise

// Promise ==>
// It is javascript object which will 
// represent completion or rejection 
// of any operation

// Replies in three state
// Pending ==> data is going to avail at 
//              some time 
// Success ==> order is fullfilled
// Reject  ==> when any error comes

// async/await
// .then

let ownPromise=new Promise((resolve,reject)=>{
    let status=false
    if(status){
        resolve("Promise is resolved")
    }else{
        reject("Promise is rejected")
    }
})
ownPromise.then((resp)=>console.log(resp))
        .catch((error)=>console.log(error))
console.log("end")