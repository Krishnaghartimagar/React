import React from 'react'
let countReduces=(state,action)=>{
    switch(action.type)
    {
        case 'addtocart':
            return{
                cart:[...state.cart,action.payload]
            }
            case 'remove':
                return {
                    cart:[...state.cart.filter(a=>a.id !==action.payload.id)]
                }
    }
}
let products=[
    {
        id:1,
        title:'p1',
        price:22
    },
    {
        id:2,
        title:'p2',
        price:22
    },
    {
        id:3,
        title:'p3',
        price:22
    }
]

function F() {
  return (
    <div classname='grid grid-cols-2'>
        <div>
            <h3>Product list</h3>
            
       {products.map(a=><li>{a.title} <button onClick={()=>dispatch({type:'addtocart',payloas:a})}>addtocart</button></li>)}
        
        </div>
        <div>
            <h3>chart list{state.cart.length}</h3>
            {
                state.cart.map(a=><li>{a.title}<button onClick={()=>dispatch({type:'remove',payloas:a})}>remove</button></li>)
            }
        </div>
      
    </div>
  )
}

export default F
