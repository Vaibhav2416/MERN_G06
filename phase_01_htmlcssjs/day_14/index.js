// ES6 => Ecmascript 6 ==> Ecmascript 2015
// 6th version of javascript
// 
// let , const ,arrow functions, template literals, spread, rest, default parameter


// Template Literals

// let name="Aman"
// let age=28
// // this was before es6 feature called template literal
// console.log("My name is "+name+" And my age is "+age)
// // too many plus signs here
// console.log(`My name is ${name} and my age is ${age}`)


// // Destructuring

// let obj={
//     movieName:"Avtaar",
//     rating:4.7
// }
// // console.log(obj.movieName)

// let {movieName,rating} =obj
// console.log(rating)

// let arr=[10,20,30,40]
// // a=10, b=30 , a=arr[0], b=arr[2]
// let [a,c,b]=arr
// console.log(a,b)


// // spread operator  (...)
// //  spread operator (...) copies all or part of an existing array or 
// // object into another array or object. 

// let arr1=[10,20,30] // 101
// let arr2=arr1       // 101
// arr2.push(90) 
// console.log(arr1) //[10,20,30,90]
// console.log(arr2) //[10,20,30,90]
// // arr1 and arr2 will share same memory reference

// let arr3=[40,50,60]  // 101
// let arr4=[...arr3]   // 201
// arr4.push(100)
// console.log(arr3)  // [40,50,60]
// console.log(arr4)  // [40,50,60,100]

// // combining two arrays with spread

// let fruits = ["Apple", "Mango"];
// let vegetables = ["Potato", "Tomato"];
// let food = [...fruits, ...vegetables];
// console.log(food);
// fruits.concat(vegetables)

// let user = {
//     name: "Aman",
//     age: 25
// };

// let newUser={...user}
// console.log(newUser)

// Adding property to object using spread
// let user = {
//     name: "Aman",
//     age: 25
// };
// let newUser={...user,city:"Shimla"}
// console.log(newUser)
// Updating property
let user = {
    name: "Aman",
    age: 25
};
// let newUser={...user,age:32}

let newUser={age:32,...user} // {name:"Aman",age:25} // order of 
// spread operator matters here
console.log(newUser)

// Rest operator (...) 

// It is used to pack values of array or object
// function calculateSum(a,...nums){
//     console.log(a,nums)
// }

// calculateSum(10,20,30,40,50,60)


// Default Parameter

function nationality(country="India"){
    console.log(`This person belong to ${country}`)
}
nationality()
nationality("America")

