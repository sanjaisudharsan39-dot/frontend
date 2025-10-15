import React, { UseReducerHook } from "react"

const UseReducer = (state,action) => {
    switch(action.type){
        case 'increment':
            return{count: state.count + 1};
        case 'decrement':
            return{count:state.count - 1};
        case 'reset':
            return{count : 0};
        default:
            return state;
            
    }
};
const counter =() => {
    const [state, dispatch] = UseReducerHook(UseReducer,{count: 0});
    return(
        <div style={{textAlign:"center",marginTop:"50px",color:"black"}}>
                <h1>count : {state.count}</h1>
            <button onClick={() => dispatch({type:"+"})}>+</button>
            <button onClick={() => dispatch({type:"-"})}>-</button>
            <button onClick={() => dispatch({type:"reset"})}>reset</button>
        </div>
    );
};
export  default counter;
