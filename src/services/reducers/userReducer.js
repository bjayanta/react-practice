import { REQUEST_STATE, REQUEST_SUCCESS, REQUEST_FAILED } from "../types";

const initialState = {
    loading: false,
    users: [],
    error: ''
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_STATE:
            return {
                ...state,
                loading: true
            }

        case REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }

        case REQUEST_FAILED:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }

        default:
            return state
    }
}