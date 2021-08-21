import {createSlice} from '@reduxjs/toolkit'
import {colorsThemeType, userType} from '../types/types'

type initialStateType = {
    currentColor: colorsThemeType
    colors: Array<colorsThemeType>
}

const initialState: initialStateType = {
    currentColor: {
        name: 'start',
        primary: {
            main: '#3F51B5',
        },
        secondary: {
            main: '#2979ff',
        },
    },
    colors: [{
        name: 'yellow',
        primary: {
            main: '#f9a825',
        },
        secondary: {
            main: '#f9a825',
        },
    }, {
        name: ' teal',
        primary: {
            main: '#009688',
        },
        secondary: {
            main: '#1de9b6',
        },
    }, {
        name: 'purple',
        primary: {
            main: '#6a1b9a',
        },
        secondary: {
            main: '#6a1b9a',
        },
    }, {
        name: 'lime',
        primary: {
            main: '#9e9d24',
        },
        secondary: {
            main: '#9e9d24',
        },
    }, {
        name: 'blue',
        primary: {
            main: '#2196f3',
        },
        secondary: {
            main: '#2979ff',
        },
    }, {
        name: 'green',
        primary: {
            main: '#2e7d32',
        },
        secondary: {
            main: '#2e7d32',
        },
    }, {
        name: 'start',
        primary: {
            main: '#3F51B5',
        },
        secondary: {
            main: '#2979ff',
        },
    }

    ]
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setCurrentColor: (state, action: { payload: { name: string } }) => {
            state.currentColor = state.colors.filter(el => el.name === action.payload.name)[0]
        },
    },
})

export const {setCurrentColor,} = userSlice.actions

export default userSlice.reducer