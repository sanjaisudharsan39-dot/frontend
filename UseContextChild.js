import React, { useContext } from 'react'
import {datacontext} from './UseContextHook'
 
const UseContextChild = () => {
    let {details,n} = useContext(datacontext)
  return (
    <div>
        use context Child
        <p>{details.name}</p>
        <p>{details.age}</p>
        <p>{n}</p>
      
    </div>
  )
}

export default UseContextChild
