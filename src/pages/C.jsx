import React, { createContext } from 'react'
export let age=createContext()
function C() {
  return (
    <div>
        <a.Provider value={30}>
            <D/>
        </a.Provider>
      
    </div>
  )
}

export default C
