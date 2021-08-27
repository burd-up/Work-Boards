import {createSlice} from '@reduxjs/toolkit'
import {colorsThemeType} from '../types/types'

type initialStateType = {
    currentColor: colorsThemeType
    colors: Array<colorsThemeType>
    isOpenLeftMenu: boolean
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

    ],
    isOpenLeftMenu: false,
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setCurrentColor: (state, action: { payload: { name: string } }) => {
            state.currentColor = state.colors.filter(el => el.name === action.payload.name)[0]
        },
        setIsOpenLeftMenu: (state, action: { payload: { open: boolean } }) => {
            state.isOpenLeftMenu = action.payload.open
        },
    },
})

export const {setCurrentColor, setIsOpenLeftMenu} = userSlice.actions

export default userSlice.reducer