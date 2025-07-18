import { useContext, useEffect } from "react"
import { MyContext } from "./App"


function Home() {

    const context = useContext(MyContext)
    console.log(context?.cartItems)

    useEffect(()=> {
        fetch('https://all-apis.com/products?limit=20')
            .then(res => res.json())
            .then(result => {
                context?.setProducts(result.products)
            }
                
            )
    }, [])

    const addToCart= (product)=>{
        console.log('User clicked on the add to cart button', product)
        const existItem = context?.cartItems.find(item=>item.id===product.id)
        if(existItem){
            existItem.quantity++;

        }else {
            product.quantity=1
            context?.setCartItems([...context.cartItems, product])
        }
        
    }
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {context?.products.map(product=>(
            <div>
                <h2>{product?.name}</h2>
                <img src={product.image[0]} alt="" width={100} />
                <p>&euro;{product.price.toFixed(2)}</p>
                <button onClick={()=>addToCart(product)}>Add to cart</button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Home
