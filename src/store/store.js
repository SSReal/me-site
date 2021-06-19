import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userdetails";

const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export default store;