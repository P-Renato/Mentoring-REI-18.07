import React, { useContext } from 'react'
import { MyContext } from './App';

function A() {
    const context = useContext(MyContext);
    
  return (
    <div>
      <h1>Value A = {context?.b}</h1>
      <button onClick={()=>context?.setB(context?.b)}>increment b value</button>
    </div>
  )
}

export default A
