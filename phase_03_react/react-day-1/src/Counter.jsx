import { useState } from "react"

// Create component named as ChangeName.jsx
// h1 => Welcome {Kartik}
// Change Name button => Welcome {Harsh}

function Counter(){    
    const [count,setCount] = useState(0)

    const handleInc=()=>{
        setCount(count+1)
        console.log(count)
    }
    const handleDec=()=>{
        setCount(count-1)
    }
    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={handleInc}>Increment</button>
            <button onClick={handleDec}>Decrement</button>
        </div>
    )
}
export default Counter