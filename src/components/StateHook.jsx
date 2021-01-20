import React, { useState } from 'react'

export default function HooksExample() {
    
    var [num, setNum] = useState(5);

    function increment() {
        setNum(++num);
        console.log(num);
    }

    return (
        <div>
            <div>
                <button onClick={ () => setNum(--num) }>-</button>
                <strong>{ num }</strong>
                <button onClick={ increment }>+</button>
            </div>
        </div>
    )
}
