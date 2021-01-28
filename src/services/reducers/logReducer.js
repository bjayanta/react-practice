import { MYLOG } from "../types";

const initialState = {
    message: ''
}

export default function logReducer(state = initialState, action) {
    switch (action.type) {
        case MYLOG:
            return {
                ...state,
                message: action.payLoad
            }
    
        default:
            return state
    }
}