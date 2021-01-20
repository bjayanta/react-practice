import React, { useState, useEffect } from 'react'

export default function HooksExample() {
    
    var [num, setNum] = useState(5),
        [abc, setAbc] = useState(3);


    useEffect(() => {
        alert("Clicked!")
    }, [num])

    // function increment() {
    //     setNum(++num);
    //     console.log(num);
    // }

    return (
        <div>
            <div>
                <button onClick={ () => setNum(--num) }>-</button>
                <strong>{ num }</strong>
                <button onClick={ () => setNum(++num) }>+</button>
            </div>
            
            <hr/>
            <div>
                <button onClick={ () => setAbc(--abc) }>-</button>
                <strong>{ abc }</strong>
                <button onClick={ () => setAbc(++abc) }>+</button>
            </div>
        </div>
    )
}
