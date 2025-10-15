import React from 'react'
import { useParams } from 'react-router-dom' 

const UseParamsHook = () => {
    let {id} = useParams()
    console.log(id);
    
  return (
    <div>
      <p>UseParams</p>
      <p>Received ID : {id}</p>
      <input type='text' placeholder='Enter your name'></input><br></br>
      <button type='pass' placeholder='Enter your password' style={{width:"90px",height:"50px"}}>sign in</button>
    </div>
  )
}

export default UseParamsHook
