import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./users-reducer";

export const store = configureStore({
    reducer: {
        users: userReducer,
    },
})