import React, {createContext} from 'react'
import UseContextChild from './UseContextChild'

export const datacontext = createContext()


const UseContextHook = () => {
    let details = {
        name : 'ramesh',
        age : 22
    }
    let n = 90
  return (
    <datacontext.Provider value = {{details,n}}>
        <div>
            use context hook
        </div>
        <UseContextChild />
    </datacontext.Provider>
   
  )
}

export default UseContextHook
