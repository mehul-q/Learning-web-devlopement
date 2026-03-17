import { useState } from 'react'

import './App.css'

function App() {
  let [counter, setCounter] = useState(5);
  const addvalue = () => {
    counter = counter + 1;
    if (counter > 20) {
      counter = 20;
    }
    
    setCounter(counter);
    console.log("clicked available counter value : ", counter);
  }

  const removevalue = () => {
    counter = counter - 1;
    if (counter < 0) {
      counter = 0;
    }
    setCounter(counter);
    console.log("clicked available counter value : ", counter);
  }

  return (
    <>
      <h1>chai and react</h1>
      <h1>counter value : {counter}</h1>
      <button onClick={addvalue}>add value {counter}</button>
      <br />
      <button onClick={removevalue}>remove value {counter}</button>
      <p>footer {counter}</p>
    </>
  )
}

export default App
