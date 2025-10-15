import React from 'react'
import { useLocation } from 'react-router-dom'

const UseLocationHook = () => {
    let location = useLocation();
    console.log(location.state);
    
  return (
    <div>
        
        use location
    </div>
  )
}

export default UseLocationHook
