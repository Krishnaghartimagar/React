import React, { createContext, useReducer } from 'react'

// Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'addtocart':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }

    case 'remove':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id)
      }

    default:
      return state
  }
}

// Create Context
const CartContext = createContext()

// Provider
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] })

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
