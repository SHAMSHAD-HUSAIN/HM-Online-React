import React, { useState, useEffect } from 'react'

function Hooksfn() {
    const [data, setData] = useState([])
// const data=["a","b","c","d"]

    useEffect(() => {
        async function fetchdata() {
            const response = await fetch("https://jsonplaceholder.typicode.com/photos")
            // console.log(response)
            const json = await response.json();
            // console.log(json)
            setData(json)

        }

        fetchdata();
    },[])
    return (
        <>{data.map(val => (

            <li key={val.id}> {val.title}</li>
            
        ))}

        </>
    )
}

export default Hooksfn