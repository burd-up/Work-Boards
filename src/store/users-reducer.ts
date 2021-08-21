import { createSlice } from '@reduxjs/toolkit'
import { userType } from '../types/types'

type initialStateType = {
    currentUser: userType
    users: Array<userType>
}

const initialState: initialStateType = {
    currentUser: {id: 6, name: 'Saitama', surname: 'One-Punch Man', position: 'general director', accesses: [1,2,3,4,5], projects: [0,1,2,3]},
    users: [
        {id: 0, name: 'Roman', surname: 'Lukichev', position: 'frontend developer', accesses: [1], projects: [0,2,3]}, //accessLevel: 1 означает что есть доступ к разработке
        {id: 1, name: 'Anya', surname: 'Deryabina', position: 'tester', accesses: [2], projects: [0,2,3]}, //accessLevel: 2 означает что есть доступ к тестированию и проверке
        {id: 2, name: 'Andrey', surname: 'Lukichev', position: 'team leader', accesses: [1,2,3,4], projects: [0,3]}, //accessLevel: 3 означает что есть доступ к созданию задач
        {id: 3, name: 'Alex', surname: 'Leenders', position: 'team leader', accesses: [1,2,3], projects: [1,2]},//accessLevel: 4 означает что есть доступ к созданию проектов и их редактированию
        {id: 4, name: 'John', surname: 'Constantin', position: 'frontend developer', accesses: [1], projects: [1]},//accessLevel: 5 означает что есть доступ к созданию пользователей
        {id: 5, name: 'Frodo', surname: 'Baggins', position: 'tester', accesses: [2], projects: [1]},
        {id: 6, name: 'Saitama', surname: 'One-Punch Man', position: 'general director', accesses: [1,2,3,4,5], projects: [0,1,2,3]},
        {id: 7, name: 'check', surname: 'person', position: 'general director', accesses: [1,2,3,4,5], projects: []}
    ]
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setCurrentUser: (state,action) => {
            state.currentUser = action.payload
        },
        addUser: (state,action:{payload: {name: string, surname: string, position: string, accesses: Array<number>}}) => {
            const newUser = {
                id: state.users[state.users.length-1].id + 1,
                name: action.payload.name,
                surname: action.payload.surname,
                position: action.payload.position,
                accesses: action.payload.accesses,
                projects: []
            }
            state.users.push(newUser)
        },
        addProjectInArrayOfUsers: (state,action:{payload: {users: Array<number>, projectId: number}}) => {
            action.payload.users.forEach(el => {
                state.users.find(user => user.id === el)?.projects.push(action.payload.projectId)
            })
        },
    },
})

export const { setCurrentUser, addUser, addProjectInArrayOfUsers} = userSlice.actions

export default userSlice.reducer