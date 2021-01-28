import { REQUEST_STATE, REQUEST_SUCCESS, REQUEST_FAILED } from "../types";
import axios from "axios";

export const getUsers = () => {
    return async (dispatch) => {
        try {
            dispatch({type: REQUEST_STATE})

            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(response.data);
            
            dispatch({
                type: REQUEST_SUCCESS,
                payload: response.data
            })

        } catch (error) {
            dispatch({
                type: REQUEST_FAILED,
                payload: error.message
            })
        }
    }
}

