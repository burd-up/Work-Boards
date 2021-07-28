import { createSlice } from '@reduxjs/toolkit'


type userType = {
    id: number
    name: string
    surname: string
    position: string
    accessLevel: number
}

type initialStateType = {
    currentUser: userType
    users: Array<userType>
}

const initialState: initialStateType = {
    currentUser: {id: 0, name: 'Roman', surname: 'Lukichev', position: 'frontend developer', accessLevel: 1,},
    users: [
        {id: 0, name: 'Roman', surname: 'Lukichev', position: 'frontend developer', accessLevel: 1,}, //accessLevel: 1 означает что есть доступ к разработке
        {id: 1, name: 'Anya', surname: 'Deryabina', position: 'tester', accessLevel: 2,}, //accessLevel: 2 означает что есть доступ к тестированию и проверке
        {id: 2, name: 'Andrey', surname: 'Lukichev', position: 'team leader', accessLevel: 3,}, //accessLevel: 3 означает что есть доступ к разработке, проверке, созданию задач
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