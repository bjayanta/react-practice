import React, { useState, useEffect } from 'react'

export default function HooksExample() {
    
    var [num1, setNum1] = useState(5),
        [num2, setNum2] = useState(3);


    useEffect(() => {
        alert("Clicked!")
    }, [num1])

    return (
        <div>
            <div>
                <button onClick={ () => setNum1(--num1) }>-</button>
                <strong>{ num1 }</strong>
                <button onClick={ () => setNum1(++num1) }>+</button>
            </div>
            
            <hr/>
            <div>
                <button onClick={ () => setNum2(--num2) }>-</button>
                <strong>{ num2 }</strong>
                <button onClick={ () => setNum2(++num2) }>+</button>
            </div>
        </div>
    )
}
