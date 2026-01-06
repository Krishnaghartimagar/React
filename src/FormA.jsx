import React, { useState } from 'react'

function FormA() {
    let [input,setInput]=useState('krisna')
    let abc=(event)=>{
        setInput(event.target.value)
    }
    let formSubmit=(e)=>{
        e.preventDefault()
        console.log(input)
    }
  return (
    <div>
        {input}
        <form onSubmit={formSubmit}>
            <input className='border p-3' type='text' name='fname' onChange={abc} />
            <button>Send</button>
        </form>
      
    </div>
  )
}

export default FormA
