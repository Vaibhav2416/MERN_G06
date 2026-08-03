// // undefined,null,"",0,Nan, false --> except this 6 values all values are truthy
// // let a=false;  

// // console.log(Boolean(a))

// // console.log(true+6) // 7

// // Type Conversion  // Explicit Type Conversion
// let a=50;
// let s=String(a)
// console.log(typeof(s))

// let str="123" // string
// let num=Number(str)  // number
// console.log(typeof(num))

// let bool="true" // string
// let res=Boolean(bool) // boolean

// // Implicit Type Conversion
// console.log("5"+5) // 55
// console.log(7-"2"); // 5
// console.log("5"*2) // 10 

// let curr="400 Rs." // 400
// // let curr="Rs. 400" // NaN
// console.log(parseInt(curr))

// let numString="567"
// let number=+(numString)
// console.log(typeof(number))


// let a = false;
// let b = 0;
// let c = null;
// let z = a || b || c; // null
// // if all values are falsy then || will return last falsy value
// console.log(z);

// let a = false;
// let b = 'Vivek'; 
// let c = 'Rishi';

// let z = a || b || c;  // vivek

// console.log(z);

// let defaultUser = "Vivek"; 
// let user = "Akash"
// console.log(defaultUser || user) // vivek

// let defaultUser = false;
// let user = "Akash"
// console.log(defaultUser || user) // Akash

// let a = 'Prachi';
// let b = 'Vivek';
// let c = 'Rishi';
// let z = a && b && c; // if all values are true then && will return
// last truthy value

// isAuthenticated && isAdmin && ShowUI

// console.log(z);

// let a = 0;
// let b = 'Vivek';
// let c = 'Rishi';
// let z = a && b && c;
// console.log(z); // 0

// // ??
// // undefined, null
// let user;
// console.log(user ?? "Loading..")
// // <img src=" " alt="icon">

// for (let i = 0; i < 5; i++) {
//   console.log('Hello world')
// }
// console.log(i) // 5, Error --> reference error


// for... in

let obj={
    name:"Aman",
    age:30,
    address:"Shimla"
}
for(let key in obj){
    console.log(key) // name,age,address
    console.log(obj[key]) // "Aman", 30, Shimla
}

const subjects = ['javascript', 'html', 'css'];
for (let subject of subjects) {
  console.log(subject); // javascript, html, css
}

 

