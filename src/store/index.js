import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "../features/counter/counterSlice";
import userSlice from "../features/user/userSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        user: userSlice,
    },
});

export default store;