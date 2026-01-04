import React, { useContext } from 'react'

export default function D() {
    let data=useContext(age)
  return (
    <div>
      <h3>Custimer</h3>
      {data}
    </div>
  )
}
