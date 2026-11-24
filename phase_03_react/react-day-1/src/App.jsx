import Counter from "./Counter"

function App(){
  let name="Vaibhav"
  let islogged=true

  return (
    <>
      <h1>Hello World!</h1>
      <h2>Welcome {name}</h2>
      { islogged ? <p>Active</p> : <p>Offline</p> }

      <Counter />
    </>
  )
}
export default App