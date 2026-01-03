import { useEffect, useState } from "react"


function Header(){
    let [data,setData]=useState([])
    useEffect(()=>{
        document.title="sir g"
         fetch('https://dummyjson.com/products/categories').then(a=>a.json()).then(b=>setData(b))
    },[])
    return (
        <>
        <header className="bg-green-400 py-5 text-center">
            <h1 className="text-3xl">This is header</h1>
        </header>
        <nav className="bg-green-950 text-white py-4 text-center space-x-5">
            <a href="">Home</a>
            {data.slice
            (0,9).map((a)=><a key={a.slug}>{a.name}</a>)}


            <a href="">Contact</a>
            <a href="">About</a>
            </nav>
            </>
    )
    //npm run dev
    //react router  is a library that provide routing khulna duinx
    //rfce enter  function
}
 export default Header