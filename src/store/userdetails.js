import {createSlice} from "@reduxjs/toolkit";

const userInitialState = {
    logged_in: false,
    name: "",
    email: "",
    displayPhoto: "",
    id: -1, //invalid id
};

const userSlice = createSlice({
    name: "user",
    initialState: userInitialState,
    reducers: {
        login: (state, action) => {
            state.logged_in = true;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.displayPhoto = action.payload.displayPhoto;
            state.id = action.payload.id;
        },
        logout: (state) => {
            state.logged_in = false;
            state.name = "";
            state.email = "";
            state.displayPhoto = "";
            state.id = -1;
        }
    }
})

export const {login, logout}  = userSlice.actions;

export default userSlice.reducer;
