
// Functions 
// If you want to repeat certain snippet of code multiple times then we can 
// wrap that in one method which called functions

// function greet(){   // function declaration
//     console.log("welcome")
// }
// greet() // function calling

// function calculateProduct(a,b){   // parameters
//     return a*b
// }
// // console.log(calculateProduct(12,5)) // arguments
// function calculateSubtraction(a,b){
//     return a-b
// }

// // apidata --> fetchFunction --> console.log()

// let result=calculateProduct(5,4)+calculateSubtraction(3,2)
// console.log(result)


// Function Expression

// let x=function(a,b){
//     return a%b
// }

// console.log(x(9,3))

// Arrow Functions
// let checkEven=(a)=>a%2==0

// let prod=()=>{
//     let b=14
//     return a*b
// }

// console.log(checkEven(13))

// Default Parameter

let checkNationality=(country="Indian")=>{
    return `Nationality of this person is ${country}`
}

let res=checkNationality("American")
console.log(res)




