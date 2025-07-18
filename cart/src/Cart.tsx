import React, { useContext } from 'react'
import { MyContext } from './App'

function Cart() {
    const context = useContext(MyContext)
    const decrementQuantity =(item)=>{
        console.log(item)
        if(item.quantity===1){
            context?.setCartItems(context.cartItems.filter(product=>product.id!==item.id))
        }else{
            item.quantity--;
            context?.setCartItems([...context.cartItems])
        }

    }
  return (
    <div>
      <h1>Cart Page</h1>
      <div>
        {context?.cartItems.map(item=>(
            <div>
                <p>&euro;{item.price}</p>
                <img src={item.image[0]} alt="" width={100} />
                <h4>{item.name}</h4>
                <h5>Quantatity: <button onClick={()=>decrementQuantity(item)}>-</button> {item.quantity} <button>+</button></h5>
            </div>
      ))}
      </div>
    </div>
  )
}

export default Cart
