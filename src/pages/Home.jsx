import { useEffect, useState } from "react"

function Home(){
     let [data,setData]=useState([])
        useEffect(()=>{
             fetch('https://dummyjson.com/products').then(a=>a.json()).then(b=>setData(b.products))
        },[])
    return(
    <div className="container mx-auto">
<h2>product list</h2>
<div className="grid grid-cols-3 gap-4">
         {data.map((a)=><div key={a.id} className="shadow p-2">
            <img src={a.thumbnail} alt=""/> {a.title}
            <br></br>
            {a.price}</div>)}
    </div>
    </div>
    )
}
export default Home