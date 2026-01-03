import React, { useEffect, useState } from 'react'

function A() {

    //hook is always in beween function and return
    let [count,setCount]=useState(1)

    let [active,setActive]=useState(true)

    let [car,setCar]=useState({name:'krishna gharti magar' ,age:40,adress:"pyuthann"})
    let [data,setData]=useState([])

    useEffect(()=>{
        document.title='Krishna ghartimagar'
        fetch('https://dummyjson.com/products').then(a=>a.json()).then(b=>setData(b.products))
    },[])
  return (
    <div>A
        <h2 className={active ? '':'hidden'}>troggle</h2>
        {count}
 <button onClick={()=>setCount(count+1)}>++</button>   <br /> 
 
 <button onClick={()=>setCount(count-1)}>--</button>  

  <button onClick={()=>setActive(!active)}>toggle</button> 
  {car.name} {car.adress}    
  {data.map(a=><li key={a.id}>{a.title}</li>)}troggle
    </div>
  )
}
export default A

//use state and use effect is an important topic infrontend

