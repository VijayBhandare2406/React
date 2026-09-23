import { useState } from 'react'
import heroImg from './assets/hero.png'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  let [counter , setcounter] = useState(15);

  const addValue = () =>{
    if(counter == 20)return;
    counter = counter + 1;
    setcounter(counter)
  }

  const removeValue = () => {
    if(counter == 0)return;
    counter = counter - 1;
    setcounter(counter);
  }


  return (
     <>
      <h1>Counter React</h1>

      <h2>Counter value : {counter}</h2>
      <br />
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
