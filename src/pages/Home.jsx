import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"

function Home() {
  const { state, dispatch } = useContext(CartContext)
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(result => setData(result))
  }, [])

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl mb-4">Product List</h2>

      <div className="grid grid-cols-3 gap-4">
        {data.map((a) => (
          <div key={a.id} className="shadow p-2">
            <Link to={`/Detail/${a.id}`}>
              <img src={a.image} alt={a.title} className="h-40 mx-auto" />
              <p>{a.title}</p>
            </Link>

            <p className="font-bold">${a.price}</p>

            <button
              className="bg-red-400 text-white p-2 mt-2"
              onClick={() =>
                dispatch({ type: 'addtocart', payload: a })
              }
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
