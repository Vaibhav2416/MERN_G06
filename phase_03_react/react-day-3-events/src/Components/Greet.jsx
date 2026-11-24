import React, { useState } from 'react'

const Greet = () => {
  const [title,setTitle]=useState("")
  const handleClick=(name)=>{
    alert(`Welcome ${name}`)
  }
  const handleChange=(event)=>{
    // console.log(event.target.value)
    setTitle(event.target.value)
  }  
  return (
    <div>
        <button onClick={()=>handleClick("Rahul")}>Greet Rahul</button>
        <input type="text" 
            onChange={handleChange}
        />
        <br />
        <br />
        <h2>Title: {title}</h2>
    </div>
  )
}

export default Greet