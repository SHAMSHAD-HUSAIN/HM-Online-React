import React, { useEffect, useState } from 'react'

function Dependency() {
    const [count,setCount]=useState(0);
    const [name,setName]=useState('shamshad')
    useEffect(()=>{
        console.log("use effect called only when count change here!")
    },[count,name])
  return (

   <>
    <div>
      <p>{name} clicked {count} times</p>

  <button onClick={()=>setCount(count+1)}> click</button>
  <button  onClick={()=>setName(name==='shamshad'?'afjal':'shamshad')}>change name!</button>
    </div>
   <p>sdf</p>
   </>
  )
}

export default Dependency