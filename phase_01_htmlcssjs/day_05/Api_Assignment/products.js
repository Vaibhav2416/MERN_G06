

// // var, let, const

// console.log(name) // undefined
// console.log(a) //reference error
// // hoisting --> variables will be declared at the top of scope
// // Because variables will be declared in temperal dead zone
// var name="Aman"

// let a=20

// sync js

// console.log("start")

// // time taking task
// // task ---> 3 seconds // async js

// setTimeout(function(){
//     console.log("Async Task")
// },2000)

// console.log("end")


// let arr=[
//     {"key":2,"name":"aman"}, 
//     {"key":3,"name":"Pratik"}
// ]
// console.log(arr[1].name)


// Callback function

// when a function is passed as an
// arguement to another function
// then it is called as callback fn

// function greetMessage(message){
//     message()
// }

// function greetWelcome(){
//     console.log("Welcome to chitkara")
// }

// greetMessage(greetWelcome)

// function calculate(a,b,operation){
//     operation(a,b)
// }

// function add(a,b){
//     console.log(a+b)
// }
// function prod(a,b){
//     console.log(a*b)
// }
// calculate(6,7,add) //add(5,4)
// calculate(8,9,prod)

// h1.addEventlistner("click",handleClick)


// setTimeout(function(){
//     console.log("Executed")
// },3000)

// fetch("https://dummyjson.com/products").function


// callback hell

// function executeDetails(id,callbck){
//     console.log("start")
//     setTimeout(function(){
//         console.log("Id",id)
//         callbck()    
//     },2000)  
// }

// executeDetails(1,function(){
//     console.log("User Authenticated")
//     executeDetails(2,function(){
//         console.log("Post Fetched")
//         executeDetails(3,function(){
//             console.log("Profile visited")
//             executeDetails(3,function(){
//             console.log("Profile visited")
//         })
//         })
//     })
// })


// setTimeout(function(){
//     console.log("Welcome")
// },2000)

// setTimeout(function(){
//     console.log("Good Morning")
// },2000)


// executeDetails().then(getPosts).then(profileVisited).then()

// Promise

// Api --> It is an interface through which systems can communicate

// Api brings data from server to frontend.

// https:fakeproducts.com  ---> raw data

// fetch --> It will pull response from an api

// fetch("url",[get,post,put,patch,delete])

let container=document.getElementById("container")

fetch("https://dummyjson.com/products").then(function(res){
    return res.json()
}).then(function(data){
    console.log(data.products)
    //{title:"Bag",id="1"}
    for(el of data.products){
        container.innerHTML+=`
        <div id="div-${el.id}">
            <img src="${el.images[0]}" alt="">
            <h3>${el.title}</h3>
            <p>Brand: ${el.brand}</p>
            <p>Price:${el.price}</p>
            <button id="cart">Add To cart</button>
            <button id="div-${el.id}">Delete</button>
        </div>
        `
    }
    let cartBtns=document.querySelectorAll("#cart") // # 1st div
    // console.log(cartBtn)
    for(let el of cartBtns){
        el.addEventListener("click",function(){
            alert("Button is triggered")
        })
    }
})

