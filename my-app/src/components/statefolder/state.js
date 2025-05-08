import React, { useState } from 'react'
import "./counter.css"
function CounterFN() {
    // let value=0;
    const [val, setCount] = useState(0);

    function decrementFun() {
        setCount(val - 1)
    }

    let IncFunc = () => {
        setCount(param=>param + 5)
        setCount(param=>param + 5)
        setCount(param=>param + 5)
        setCount(param=>param + 5)
        setCount(param=>param + 5)
    }
    return (
        <div class="count-div">
            <button onClick={decrementFun}> -</button>
            <h1 >Count:{val}</h1>
            <button onClick={IncFunc}>+</button>
        </div>
    )
}

export default CounterFN
