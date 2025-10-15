import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseEffectHook = () => {
    let [click, setIsclick] = useState(false)
    const [todos, setTodos] = useState([])

    function getalldata() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((result) => {
                console.log(result.data);
                setTodos(result.data)
            })
    }
    useEffect(() => {
        getalldata()
    }, [])

    useEffect(() => {
        console.log("click changed to", click);
    }, [click])
    function clickstatus() {
        setIsclick(prev => !prev)
    }
    return (
        <div>
            USE EFFECT HOOK
            <button onClick={clickstatus}>CLICK_TWO</button>
            <p>Click status : {click.toString()}</p>
            {
                todos && todos.map(i => (<li>{i.title} - {i.id}</li>

                ))
            }

        </div>
    )
}

export default UseEffectHook
