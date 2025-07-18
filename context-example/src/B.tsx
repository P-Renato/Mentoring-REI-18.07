import { useContext } from "react"
import { MyContext } from "./App"


function B() {
    const context = useContext(MyContext);

    return (
      <div>
        <h1>Value B = {context?.b}</h1>
        <button onClick={()=>context?.setA(context?.b+1)}>increment a value</button>
      </div>
    );
}

export default B
