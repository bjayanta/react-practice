import React from 'react'
import { useSelector } from "react-redux";

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const name = useSelector((state) => state.counter.name);

    return (
        <>
            <strong>{name}</strong>
            <h2>{count}</h2>
        </>
    )
}

export default Counter;