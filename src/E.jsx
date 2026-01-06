import React, { useReducer } from 'react'
let countReduces=(state,action)=>{
    switch(action.type)
    {
        case 'inc':
            return{
                count:state.count+1
            }
            case 'dis':
                return {
                    count:state.count-1
                }
    }
}

export default function E() {
    let [state,dispatch]=useReducer(countReduces,{count:0})
  return (
    <div>
        <h3>useReducer Hook</h3>
        <h2>{state.count}</h2>
        <button onClick={()=>dispatch({type:'inc'})}>++</button>
        <button onClick={()=>dispatch({type:'dis'})}>--</button>

        
      
    </div>
  )
}
