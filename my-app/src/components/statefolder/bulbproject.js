import React, { useState } from 'react'
import "./counter.css"
import Onimg from "../../image/pic_bulbon-on.gif"
import offimg from "../../image/pic_bulboff.gif"
function Bulbproject() {
const [image,setImg]=useState(offimg)

    let bulbOnfunc=()=>{
      setImg(Onimg)
    }
function bulbOffFun(){
    setImg(offimg)
}

  return (
    <div class="count-div">
        <button onClick={bulbOnfunc}> on</button>
        <img src={image} alt='img'/>
        <button onClick={bulbOffFun}> off</button>
    </div>
  )
}

export default Bulbproject