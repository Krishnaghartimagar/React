import React, { useContext } from 'react'
import { CartContext } from './CartContext'

function Cart() {
  const { state, dispatch } = useContext(CartContext)

  return (
    <div className="p-8">
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="bg-gray-200 border-b">
            <th>S.N</th>
            <th>Title</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {state.cart.map((a, index) => (
            <tr key={a.id} className="border-b">
              <td>{index + 1}</td>
              <td>{a.title}</td>
              <td>
                <img width="60" src={a.image} alt={a.title} />
              </td>
              <td>
                <button
                  className="bg-red-500 text-white px-2 py-1"
                  onClick={() =>
                    dispatch({ type: 'remove', payload: a })
                  }
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Cart
