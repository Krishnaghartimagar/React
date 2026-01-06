import React, { useCallback, useState } from 'react'

function K() {
    let [data,setData]=useState(0)
    let [count,setCount]=useState(0)
    let aa=useCallback(()=>{

    },[count])
  return (

    
    <div>
        <G tt={aa} />
        <h2>{data} </h2><button onClick={()=>setData(data+1)}>++</button>
         <h2>{count} </h2><button onClick={()=>setCount(count+1)}>++</button>

    </div>
  )
}

export default K
