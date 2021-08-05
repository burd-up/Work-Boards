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
            communication: [{id: 0, message: 'something words', whoRead: [2],
                    author: {id: 2, name: 'Andrey', surname: 'Lukichev', position: 'team leader', accessLevel: 3, projects: [0]}},
                    {id: 0, message: 'something words 2 dfdfsdfs ererg jyhjtyu fgdfgr fgwer f fgrgrg fweq ', whoRead: [0],
                    author: {id: 0, name: 'Roman', surname: 'Lukichev', position: 'frontend developer', accessLevel: 1, projects: [0]}}],
            developer: null,
            forReview: null,
            tester: null,
            creator: {id: 2, name: 'Andrey', surname: 'Lukichev', position: 'team leader', accessLevel: 3, projects: [0]},
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
            creator: {id: 2, name: 'Andrey', surname: 'Lukichev', position: 'team leader', accessLevel: 3, projects: [0]},
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
                creator: {id: 2, name: 'Andrey', surname: 'Lukichev', position: 'team leader', accessLevel: 3, projects: [0]},
            },]
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
            creator: {id: 3, name: 'Alex', surname: 'Leenders', position: 'team leader', accessLevel: 3, projects: [1]},
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
            creator: {id: 3, name: 'Alex', surname: 'Leenders', position: 'team leader', accessLevel: 3, projects: [1]},
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
        sendMessage: (state:initialStateType, action:{payload: {message: string, author: userType, taskId: number}}) => {
            let indexProject = state.projects.findIndex(el => el.id === state.currentProjectId);
            let indexTask = state.projects[indexProject].tasks.findIndex(el => el.id === action.payload.taskId);
            const lengthMessages = state.projects[indexProject].tasks[indexTask].communication.length;
            const id = lengthMessages === 0? 0 : state.projects[indexProject].tasks[indexTask].communication[lengthMessages - 1].id +1;
            state.projects[indexProject].tasks[indexTask].communication.push({id: id, message: action.payload.message, author: action.payload.author, whoRead: [action.payload.author.id]});
        },
        takeTaskForRevision: (state:initialStateType, action:{payload: {taskId: number}}) => {
            let indexProject = state.projects.findIndex(el => el.id === state.currentProjectId);
            let indexTask = state.projects[indexProject].tasks.findIndex(el => el.id === action.payload.taskId);
            state.projects[indexProject].tasks[indexTask].status = 'development';
            state.projects[indexProject].tasks[indexTask].forReview = false;
        },
    },
})

export const {takeTaskForDevelopment, takeTaskForReview, giveTaskForReview, approveTask, sendMessage, takeTaskForRevision} = projectSlice.actions

export default projectSlice.reducer