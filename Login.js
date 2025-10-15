import React from 'react'
// import React, {routing} from 'react'


const Login = () => {
  return (
    <div>
      <p>Log in</p>
      <h1>LOGIN PAGE</h1>
      <input type='center text'placeholder='Enter Your Name'style={{width:"150px",height:"20px"}}></input><br></br>
      <input type='number' placeholder='Enter Your Name'style={{width:"150px",height:"20px",color:"red",background:"black",marginTop:'20px'}}></input>
      <button type="text" style={{backgroundColor:"grey",cursor:"pointer",color:"whitesmoke",mariginleft:"20px",margintop:"20px",width:"150px",height:"50px"}}>Sign In</button>
    </div>
  )
}

export default Login