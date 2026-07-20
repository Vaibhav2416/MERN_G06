
// let arr=[2,3,4,5,6]

// to reduce lines of code
// easy to read
// mostly used in react

// foreach, map, filter, reduce --> hof

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// A function which takes another function 
// as an argument then it is higher order functions

let arr=[2,3,4,5,6]
// arr.forEach((e)=>console.log(e))


// map ---> returns array
// item --> 2
// item --> 3
// let sq=arr.map((item)=>{
//     return item**2
// })
let sq=arr.map((item)=>item**2)
console.log(sq)

let products=[
    {"name":"Iphone-15","price":70000},
    {"name":"Samsung-Galaxy S24","price":90000},
    {"name":"Motorola","price":20000}
]

let prices=products.map((el)=>el.price)
let names=products.map((el)=>el.name.toUpperCase())
console.log(prices)
console.log(names)


// filter --> this will also return an array based
//            on certain condition

let num=[30,12,14,15,7,18,23,27]

let even=num.filter((el)=>{
    return el%2==0
})
console.log(even)

// reduce ---> It will perform certain
// mathematical operation on your array and
// returns single value

let numbers=[10,50,20]
   // 7+10 + 50+20
let result=numbers.reduce((acc,el)=>{
    return acc+el
},7)
// accumulator --> starting value of any result

console.log("result: ",result)


// sort --> this will return modified array

let ages=[10,2,6,30,40]
// 10 2 30 40 6
// console.log(ages.sort())
ages.sort((a,b)=>a-b)
console.log("Checking Original array",ages)
let sortedAges=ages.sort((a,b)=>a-b) // b-a
// this will modify your array
// heap memory ---> 
let decendingAges=ages.sort((a,b)=>b-a) // b-a
console.log(sortedAges)
console.log(decendingAges)