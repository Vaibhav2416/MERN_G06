
// let name="Aman"
// let age=30
// let address="Shimla"
// let marks=[40,50]

// let person={
//     name:"Aman",
//     age:20,
//     address:"Shimla",
//     marks:[30,40]
// }
// console.log(person)
// console.log(person.address) // dot method of accessing
// console.log(person['age']) // square brackets method of accessing

// let product=new Object() // creating object with constructor
// product['product_name']="Iphone 14" // adding properties
// product['price']=64000  //adding

// product['price']=70000  // updating object properties
// console.log(product)


// let obj = { model: "Tesla", color: "Red" };
// delete obj.color;
// console.log(obj);

// let obj = { model: "Tesla" }; //checking existing of properties
// console.log("color" in obj);
// console.log(obj.hasOwnProperty("model"));


// let obj = { name: "Sourav", age: 23 };
// for (let key in obj) {
//     console.log(key + ": " + obj[key]);
// }
// console.log(Object.keys(obj)) // return array of keys
// console.log(Object.values(obj)) //return array of values

// let obj = { name: "Sourav", age: 23 };
// console.log(Object.keys(obj).length); // ['name','age'].length ==> 2

// Nested Objects ==> Api response
// let student = {
//     name: "Rahul",
//     age: 21,
//     address: {
//         city: "Delhi",
//         state: "Delhi",
//         pincode: 110001
//     }
// };

// console.log(student.address.pincode);

// let response = {
//     success: true,
//     user: {
//         name: "Rahul",
//         email: "rahul@gmail.com",
//         address: {
//             city: "Delhi",
//             country: "India"
//         }
//     }
// };
// console.log(response.user.address.country)


// let student = {
//     name: "Rahul",
//     age: 21,
//     city: "Delhi",
//     id:{
//         adhaar: '5460 xxx xxxx',
//         pan:'HJSR6780L'
//     }
// };
// // console.log(student.name);
// // console.log(student.age);
// // console.log(student.city);
// let {name:studentName, age, city,id:{adhaar,pan}} = student
// console.log(studentName)
// console.log(age)
// console.log(city)
// console.log(pan)
// console.log(id)

let student = {
    name: "Rahul"
};


let { name, country ="India"  } = student;
console.log(country);


