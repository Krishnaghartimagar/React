import { useContext, useEffect, useState } from "react"
import {Link} from "react-router-dom"
import { CartContext } from "../pages/CartContext"

function Header(){
    let {state,dispatch}=useContext(CartContext)
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
            <Link to="">Home</Link>
            {data.slice
            (0,9).map((a)=><a key={a.slug}>{a.name}</a>)}


            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="Cart">Cart{state.cart.length}</Link>
            </nav>
            </>
    )
    //npm run dev
    //react router  is a library that provide routing khulna duinx
    //rfce enter  function
}
 export default Header