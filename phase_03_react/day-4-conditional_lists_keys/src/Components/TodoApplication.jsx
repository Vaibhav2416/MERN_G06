import React, { useState } from 'react'

const TodoApplication = () => {
  const [task,setTask]=useState('')
  // {task:Learn React,status:false}
  const [todos,setTodos]=useState([])
  const handleClick=()=>{
    const newTodo={id:Date.now(),task:task,status:false}
    // todos.push(newTodo) =>we are inserting new data in old data
    //                       react can't identify here whether your array is changed 
    //                       or not
    setTodos([...todos,newTodo]) // new array with old elements 
    setTask('')
  } 
  const handleDelete=(id)=>{
    console.log(id)
    // mern.id !=id
    // [{python},{java}]
    const updateTodos=todos.filter((el)=>el.id!=id)
    setTodos(updateTodos) 
  } 
  // when task is clicked, flip its status (false -> true, true -> false)
  // map gives a new array, and we make a new object only for the clicked todo
  const handleStatus=(id)=>{
    const updateTodos=todos.map((el)=>
      el.id==id ? {...el,status:!el.status} : el
    )
    setTodos(updateTodos)
  }
  return (
    <div className="todo-page">
        <style>{`
          .todo-page{
            font-family: 'Segoe UI', Arial, sans-serif;
            max-width: 500px;
            margin: 40px auto;
            padding: 0 16px;
          }
          .todo-form{
            display: flex;
            gap: 8px;
            margin-bottom: 20px;
          }
          .todo-form input{
            flex: 1;
            padding: 10px 12px;
            font-size: 16px;
            border: 1px solid #c4ccd4;
            border-radius: 6px;
          }
          .todo-form input:focus{
            outline: 2px solid #2f6fed;
            outline-offset: 1px;
          }
          .todo-form button{
            padding: 10px 18px;
            font-size: 16px;
            color: #fff;
            background: #2f6fed;
            border: none;
            border-radius: 6px;
            cursor: pointer;
          }
          .todo-form button:hover{
            background: #2559c4;
          }
          .todo-box{
            border: 1px solid #d5dbe1;
            border-radius: 8px;
            padding: 8px 16px;
            min-height: 60px;
          }
          .todo-row{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            padding: 10px 0;
            border-bottom: 1px solid #e8ecf0;
          }
          .todo-row:last-child{
            border-bottom: none;
          }
          .todo-row h2{
            flex: 1;
            margin: 0;
            font-size: 18px;
            font-weight: 500;
            cursor: pointer;
            user-select: none;
            word-break: break-word;
            transition: opacity 0.2s;
          }
          /* clicked task: light + line through */
          .todo-row h2.done{
            opacity: 0.4;
            text-decoration: line-through;
          }
          .todo-row button{
            padding: 6px 12px;
            font-size: 14px;
            color: #b42318;
            background: transparent;
            border: 1px solid #f0b4ae;
            border-radius: 6px;
            cursor: pointer;
          }
          .todo-row button:hover{
            background: #fdecea;
          }
          .todo-empty{
            margin: 12px 0;
            text-align: center;
            color: #6b7785;
          }
        `}</style>

        <div className="todo-form">
            <input type="text" value={task} 
            onChange={(e)=>setTask(e.target.value)} 
            placeholder='Enter Todo'/>
            <button onClick={handleClick}>Submit</button>
        </div>
        <div className="todo-box">
            {
                todos.length===0 && <p className="todo-empty">No todos yet</p>
            }
            {
                todos.map((el)=>{
                    return <div className="todo-row" key={el.id}>
                        <h2 
                        className={el.status ? 'done' : ''}
                        onClick={()=>handleStatus(el.id)}
                        >{el.task}</h2>
                        <button 
                        onClick={()=>handleDelete(el.id)}
                        >Delete</button>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default TodoApplication
