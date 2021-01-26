import { INCREMENT, DECREMENT } from "../types";

const initialState = {
    count: 5
}

export default function counterReducer(state = initialState, action) {
    // use switch...case statement 
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + action.payLoad
            }
        
        case DECREMENT:
            return {
                ...state,
                count: state.count - action.payLoad
            }
        
        default:
            return state
    }

    // using condition
    // if(action.type === INCREMENT) {
    //     return {
    //         ...state,
    //         count: state.count + action.payLoad
    //     } 
    // }

    // if(action.type === DECREMENT) {
    //     return {
    //         ...state,
    //         count: state.count - action.payLoad
    //     }
                
    // }

    // return state;
}