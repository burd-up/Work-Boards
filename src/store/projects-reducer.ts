import {createSlice} from '@reduxjs/toolkit'
import {projectType, userType} from '../types/types';

export type initialStateType = {
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
            forReview: null,
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
            forReview: null,
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
                forReview: null,
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
            forReview: null,
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
            forReview: null,
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
        takeTaskForDevelopment: (state:initialStateType, action:{payload: {developer: userType, taskId: number}}) => {
            let indexProject = state.projects.findIndex(el => el.id === state.currentProjectId);
            let indexTask = state.projects[indexProject].tasks.findIndex(el => el.id === action.payload.taskId);
            state.projects[indexProject].tasks[indexTask].status = 'development';
            state.projects[indexProject].tasks[indexTask].developer = action.payload.developer;
        },
        takeTaskForReview: (state:initialStateType, action:{payload: {tester: userType, taskId: number}}) => {
            let indexProject = state.projects.findIndex(el => el.id === state.currentProjectId);
            let indexTask = state.projects[indexProject].tasks.findIndex(el => el.id === action.payload.taskId);
            state.projects[indexProject].tasks[indexTask].status = 'testing';
            state.projects[indexProject].tasks[indexTask].tester = action.payload.tester;
        },
        giveTaskForReview: (state:initialStateType, action:{payload: {taskId: number}}) => {
            let indexProject = state.projects.findIndex(el => el.id === state.currentProjectId);
            let indexTask = state.projects[indexProject].tasks.findIndex(el => el.id === action.payload.taskId);
            state.projects[indexProject].tasks[indexTask].forReview = true;
        },
        approveTask: (state:initialStateType, action:{payload: {taskId: number}}) => {
            let indexProject = state.projects.findIndex(el => el.id === state.currentProjectId);
            let indexTask = state.projects[indexProject].tasks.findIndex(el => el.id === action.payload.taskId);
            state.projects[indexProject].tasks[indexTask].status = 'ready';
        },
    },
})

export const {takeTaskForDevelopment, takeTaskForReview, giveTaskForReview, approveTask} = projectSlice.actions

export default projectSlice.reducer