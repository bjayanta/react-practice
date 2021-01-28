import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {}

export default createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
)