import React, { useReducer } from 'react'

type StateType = {
  count: number,
  todos: object[],
}

type IncDec = {
  type: 'increment'|'decrement',
  payload: number
}
type Reset = {
  type: 'reset'
}

type ActionType = IncDec | Reset;

function reducer (state: StateType, action: ActionType) {
  switch(action.type){
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    case 'reset':
      return { ...state, count: 0 };
    default:
      return state;
  }
}

const initialState = {
  count: 1,
  todos: []
}

function App() {
  const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <div>
      <h1>counter : {state.count}</h1>
      <button onClick={()=>dispatch({type:'increment', payload: 1})}>increment</button>
      <button onClick={()=>dispatch({type:'decrement', payload: 1})}>decrement</button>
      <button onClick={()=>dispatch({type: 'reset'})}>reset</button>
      <div>
        <h1>todo app</h1>
        <input type="text" />
        <button>add task</button>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}

export default App
