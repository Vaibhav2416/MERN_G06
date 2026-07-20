
let cardContainer=document.getElementById("cardContainer")
// selected main div of cards here

// let arr=[
//     {"id":1,"name":"Aman","Address":"Shimla"},
//     {"id":2,"name":"Neha","Address":"Shimla"},
//     {"id":3,"name":"Pratik","Address":"Shimla"},
// ]

// // for(let i=0;i<arr.length;i++){
// //     console.log(arr[i].name)
// // }

// // arr.forEach((el,index)=>{
// //     console.log(el)
// //     console.log(index)
// // })
// let url='https://dummyjson.com/recipes'


let fetchData=async(dish="")=>{
    let response=await fetch(`https://dummyjson.com/recipes/search?q=${dish}`)
    let data=await response.json()
    let arr=data.recipes
    // console.log(arr)
    cardContainer.innerHTML=""
    arr.forEach((el,index)=>{
        cardContainer.innerHTML+=`
        <div id="d-${index}">
        <img src="${el.image}">
        <h3>${el.name}</h3>
        <p>Time: ${el.prepTimeMinutes}</p>
        <button onclick="handleDelete(${index})">Delete</button>
        </div>
        `
    })
}
fetchData()

function handleDelete(id){
    let div=document.getElementById(`d-${id}`)
    div.remove()
}
function handleSubmit(){
    let inp=document.getElementById("find").value // pizza
    fetchData(inp)
}