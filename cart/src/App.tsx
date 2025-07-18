import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Cart from "./Cart"
import { createContext, useState } from "react"

type MyContextType = {
  products: object[],
  cartItems: object[],
  setProducts: React.Dispatch<React.SetStateAction<object[]>>
  setCartItems: React.Dispatch<React.SetStateAction<object[]>>
}

export const MyContext = createContext<MyContextType|null>(null)

function App() {
  const [products, setProducts] = useState<object[]>([])
  const [cartItems, setCartItems] = useState<object[]>([])
  
  return (
    <>
    <MyContext.Provider value={{products, setProducts, cartItems, setCartItems}}>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart <sup>{cartItems.length===0 ?"":cartItems.length }</sup></Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  )
}

export default App
