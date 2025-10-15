import React from 'react'
import PropsChild2 from '../Components/PropsChild2'

const PropsChild = (props)=>{
  return (
    <div>
      PropsChild 
      {props.y}
      {props.z}
      <PropsChild2 name={props.z}/>
    </div>
  )
}

export default PropsChild
