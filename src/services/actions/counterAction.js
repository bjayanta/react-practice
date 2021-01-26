import { INCREMENT, DECREMENT } from "../types";

export const increment = (input) => {
    // do what u need 

    return {
        type: INCREMENT,
        payLoad: input
    }
}

export const decrement = (input) => {
    // do what u need 

    return {
        type: DECREMENT,
        payLoad: input
    }
}