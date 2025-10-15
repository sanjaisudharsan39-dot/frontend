import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import Login from './Login'

const Routing = () => {
    let nav = useNavigate();
    function handleparams(){
        console.log('useparams') 
        nav('/params/12')
        
    }
  return (
    <div>
        <Link to = '/useState'>
            <button>USE STATE</button>
        </Link>
        <Link to ='/location' state = 'add details'>
        {/* <input>enter a name</input> */}
        <button>USE LOCATION</button>
        </Link>
        <Link to = '/Loginpage'>
        <button>login</button>
        </Link>
        <button onclick={handleparams}>USE PARAMS</button>
    </div>
  )
}

export default Routing
