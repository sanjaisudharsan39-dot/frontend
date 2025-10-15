import React from 'react'
import PropsChild from './PropsChild';
const ParentProps = () => {
    let x = 400;
    let name = 'Sanjai'
  return (
    <div>
      ParentProps <PropsChild y={x} z={name} />
    </div>
  )
}

export default ParentProps


