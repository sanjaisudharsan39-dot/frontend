// import React from 'react'
import React, {useState} from 'react'

const UseState = () => {
  let [ count, setCount] = useState (0)
  let AddCount = () => {setCount(n => n+1)}
  let DecCount = () => {setCount(n => n-1)}
  return (
    <div>
      <button onClick = {AddCount}>+</button>
      <p>{count}</p>
      <button onClick = {DecCount}>-</button>
      
      
    </div>
  )
}

export default UseState
