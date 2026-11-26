import React from 'react'
import Dashboard from './Components/Dashboard'
import LogInPage from './Components/LogInPage'
import Students from './Components/Students'
import TodoApplication from './Components/TodoApplication'

const App = () => {
  const age=17
  const loggedIn=true
  // if(age>=18){
  //   return <h1>Person can Vote</h1>
  // }else{
  //   return <h1>Person is not eligible for vote</h1>
  // }
  return (
    <div>
      {/* {
        loggedIn ? 
        <Dashboard /> :
        <LogInPage />
      } */}

      {/* <Students /> */}
      <TodoApplication />
    </div>
  )
}

export default App