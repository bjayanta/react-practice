import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: [1, 2],
    },
    reducers: {
        addUser: (state, action) => {
            state.data.push(action.payload);
        },
    },
});

export const {addUser} = userSlice.actions;
export default userSlice.reducer;