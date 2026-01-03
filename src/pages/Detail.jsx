import { useEffect, useState } from "react"

function Detail(){
    let{id}=userParams()
   let {categoryId}=useParams()
        let [data,setData]=useState([])
           useEffect(()=>{
                fetch(fetch(`https://dummyjson.com/products/${id}`)
   ).then(a=>a.json()).then(b=>setData(b))
           },[id])
    return (
        <div className="container mx-auto">Detailed of {data.title}
        <p>{data.discription}</p>
        <img src={data.thumbnail} alt="" />

        </div>

    )
    

}
export default Detail