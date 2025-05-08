
import { useState } from "react"

import offimage from "../assets/image/pic_bulboff.gif";
import onimage from "../assets/image/pic_bulbon-on.gif";


function Mybutton(){

    const [count,setCount]=useState(0);
    const [imgurl,SetImageurl]=useState(offimage)

  
function handleClick(){
    console.log(" hey! welcome here!")
    
  
}



function decreaseVal(){
    setCount(count-1)
}
function increaseVal(){
    setCount(count+5)
}

function bulbOn(){
SetImageurl(onimage)
}
function bulbOff(){
    SetImageurl(offimage)
    }
    return(
        <>
        <button onClick={()=>{alert("hey! you entered here!")}}>
            click me!
        </button>
      <br />
        <button onClick={decreaseVal}>
            -
        </button>
        <h1>{count}</h1>
        <button onClick={ increaseVal}>
            +
        </button>
      

      <button onClick={bulbOn}>on</button>
     <img src={imgurl} alt="off image bulb."/>
      <button onClick={bulbOff}>off</button>
        </>

    )
}

export default  Mybutton 