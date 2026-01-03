import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function Category() {
  let { categoryId } = useParams()
  let [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${categoryId}`)
      .then(res => res.json())
      .then(result => setData(result.products))
  }, [categoryId])

  return (
    <div>
      <h2>Category list of {categoryId}</h2>

      <div className="grid grid-cols-3 gap-4">
        {data.map(a => (
          <div key={a.id} className="shadow p-2">
            <Link to={`/detail/${a.id}`}>
              <img src={a.thumbnail} alt={a.title} />
              <h3>{a.title}</h3>
            </Link>
            <p>Price: {a.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category
