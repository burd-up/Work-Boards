import { createSlice } from '@reduxjs/toolkit'
import { userType } from '../types/types'

type initialStateType = {
    currentUser: userType
    users: Array<userType>
}

const initialState: initialStateType = {
    currentUser: {id: 0, name: 'Roman', surname: 'Lukichev', position: 'frontend developer', accessLevel: 1, projects: [0,2,3]},
    users: [
        {id: 0, name: 'Roman', surname: 'Lukichev', position: 'frontend developer', accessLevel: 1, projects: [0,2,3]}, //accessLevel: 1 означает что есть доступ к разработке
        {id: 1, name: 'Anya', surname: 'Deryabina', position: 'tester', accessLevel: 2, projects: [0,2,3]}, //accessLevel: 2 означает что есть доступ к тестированию и проверке
        {id: 2, name: 'Andrey', surname: 'Lukichev', position: 'team leader', accessLevel: 3, projects: [0,3]}, //accessLevel: 3 означает что есть доступ к разработке, проверке, созданию задач
        {id: 3, name: 'Alex', surname: 'Leenders', position: 'team leader', accessLevel: 3, projects: [1,2]},
        {id: 4, name: 'John', surname: 'Konstantin', position: 'frontend developer', accessLevel: 1, projects: [1]},
        {id: 5, name: 'Frodo', surname: 'Baggins', position: 'tester', accessLevel: 2, projects: [1]}
    ]
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setCurrentUser: (state,action) => {
            state.currentUser = action.payload
        },
    },
})

export const { setCurrentUser,} = userSlice.actions

export default userSlice.reducer