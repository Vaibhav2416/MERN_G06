
// setInterval
// console.log("start")
// setTimeout(()=>{
//     console.log("Getting executed after 3 seconds")
// },3000)
// console.log("end")

// Setinterval --> this will perform certain 
//                 task repeatedly after specfic time
// setInterval(()=>{
//     console.log("Hello")
//     console.log("world")
// },2000)

// 1 --> 2 --> 3--> 4
// 2
// 3

let count=0
let cntText=document.getElementById("cnt")
let id;
// id;
id=setInterval(() => {
    count++
    cntText.innerHTML=count
    if(count==3){
    clearInterval(id)
    }
}, 1000);



