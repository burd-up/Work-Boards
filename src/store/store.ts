import { configureStore } from '@reduxjs/toolkit'
import userReducer from './users-reducer'
import projectReducer from './projects-reducer'

export const store = configureStore({
    reducer: {
        users: userReducer,
        projects: projectReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

