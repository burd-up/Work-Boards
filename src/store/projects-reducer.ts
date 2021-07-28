import {createSlice} from '@reduxjs/toolkit'

type taskType = {
    id: number
    name: string
    description: string
    priority: number
    status: 'newTask' | 'development' | 'testing' | 'ready'
    communication: Array<string>
    developer: Object | null
    tester: Object | null
    creator: Object | null
}

type projectType = {
    id: number
    name: string
    developersId: Array<number>
    tasks: Array<taskType>
}

type initialStateType = {
    currentProjectId: number
    projects: Array<projectType>
}

const initialState: initialStateType = {
    currentProjectId: 0,
    projects: [{
        id: 0,
        name: 'Task management system',
        developersId: [0, 1, 2],
        tasks: [{
            id: 0,
            name: 'Create repository',
            description: 'This makes the changes in your file available to people you are working with.',
            priority: 7,
            status: 'newTask', //development значит кто то взял задачу, testing - кто то тестирует, ready - готово
            communication: [],
            developer: null,
            tester: null,
            creator: null,

        }, {
            id: 1,
            name: 'Create React app',
            description: 'ReactJS offers graceful solutions to some of front-end programming’s most persistent issues, ' +
                'allowing you to build dynamic and interactive web apps with ease. It’s fast, scalable, flexible, ' +
                'powerful, and has a robust developer community that’s rapidly growing. There’s never been a better ' +
                'time to learn React.',
            priority: 6,
            status: 'newTask', //development значит кто то взял задачу, testing - кто то тестирует, ready - готово
            communication: [],
            developer: null,
            tester: null,
            creator: null,
        },
            {
                id: 2,
                name: 'Initial Project',
                description: 'It’s fast, scalable, flexible, powerful, and has a robust developer community that’s rapidly ' +
                    'growing. There’s never been a better time to learn React.',
                priority: 3,
                status: 'newTask', //development значит кто то взял задачу, testing - кто то тестирует, ready - готово
                communication: [],
                developer: null,
                tester: null,
                creator: null,
            }]
    }, {
        id: 1,
        name: 'Shop online',
        developersId: [0, 1, 2],
        tasks: [{
            id: 0,
            name: 'Create repository',
            description: 'This makes the changes in your file available to people you are working with.',
            priority: 7,
            status: 'newTask', //development значит кто то взял задачу, testing - кто то тестирует, ready - готово
            communication: [],
            developer: null,
            tester: null,
            creator: null,
        }, {
            id: 1,
            name: 'Create React app',
            description: 'ReactJS offers graceful solutions to some of front-end programming’s most persistent issues, ' +
                'allowing you to build dynamic and interactive web apps with ease. It’s fast, scalable, flexible, ' +
                'powerful, and has a robust developer community that’s rapidly growing. There’s never been a better ' +
                'time to learn React.',
            priority: 6,
            status: 'newTask', //development значит кто то взял задачу, testing - кто то тестирует, ready - готово
            communication: [],
            developer: null,
            tester: null,
            creator: null,
        },
            ]
    }]
}

export const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        takeTaskForDevelopment: (state, action) => {
            let indexProject = state.projects.findIndex(el => el.id === state.currentProjectId);
            let indexTask = state.projects[indexProject].tasks.findIndex(el => el.id === action.payload.taskId);
            state.projects[indexProject].tasks[indexTask].status = 'development';
        },
    },
})

export const {takeTaskForDevelopment,} = projectSlice.actions

export default projectSlice.reducer