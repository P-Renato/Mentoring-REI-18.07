import React, { createContext, useState } from 'react'
import A from './A'
import B from './B'

type myContextType = {
  a: number,
  b: number,
  setA: React.Dispatch<React.SetStateAction<number>>
  setB: React.Dispatch<React.SetStateAction<number>>
}

export const MyContext = createContext<myContextType | null>(null)

function App() {
  const [a,setA] =useState(0);
  const [b,setB] = useState(0);
  return (
    <MyContext.Provider value={{a, setA, b, setB}}>
      <h1>useContext with useReducer</h1>
      <A />
      <B />
    </MyContext.Provider>
  )
}

export default App
