import React, { useState } from 'react'

export default function Home() {

    let [count,setCount] = useState(0);
  return (
    <>
        <h2>Count : {count}</h2>
        <button onClick={()=>setCount(20)}>change</button>
    
    </>
  )
}
