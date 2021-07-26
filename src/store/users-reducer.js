import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: 0,
    users: [
        {id: 0, name: 'Roman', surname: 'Lukichev', position: 'frontend developer'},
        {id: 1, name: 'Anya', surname: 'Deryabina', position: 'tester'},
        {id: 2, name: 'Andrey', surname: 'Lukichev', position: 'team leader'},
    ]
}

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCurrentUser: (state,action) => {
            state.currentUser = action.payload
        },
    },
})

export const { setCurrentUser,} = userSlice.actions

export default userSlice.reducer