import React from 'react'

const Task = () => {
    let a = 10;
    let name = 'alpha';
    let stud= {
        name:'beta',
        class : 9
      }
    let arr =["red","blue","green","orange"]
    let arobj = [{id:1, name:'gama'},{id : 2,name: 'omega'}]
  return (
    <div>
        <h1>{a}rupees</h1>
        <h2>{name}</h2>
        <h3>{stud.name}</h3>
        <h3>{stud.class}</h3>
        {arr.map(item =><p>{item}</p>)}   
       {arobj.map(str =>(<p>{str.id} {str.name}</p>))}    
    </div>
  )
}

export default Task;