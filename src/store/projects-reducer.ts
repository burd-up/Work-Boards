import {createSlice} from '@reduxjs/toolkit'
import {projectType, taskType, userType} from '../types/types';

export type initialStateType = {
    currentProjectId: number | null
    projects: Array<projectType>
}

const initialState: initialStateType = {
    currentProjectId: 0,
    projects: [{
        id: 0,
        name: 'Task management system',
        developersId: [0, 1, 2, 6],
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
            creator: {id: 2, name: 'Andrey', surname: 'Lukichev', position: 'team leader', accesses: [1,2,3], projects: [0,3]},
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
            creator: {id: 2, name: 'Andrey', surname: 'Lukichev', position: 'team leader', accesses: [1,2,3], projects: [0,3]},
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
                creator: {id: 2, name: 'Andrey', surname: 'Lukichev', position: 'team leader', accesses: [1,2,3], projects: [0,3]},
            },]
    }, {
        id: 1,
        name: 'Shop online',
        developersId: [3, 4, 5, 6],
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
            creator: {id: 3, name: 'Alex', surname: 'Leenders', position: 'team leader', accesses: [1,2,3], projects: [1,2]},
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
            creator: {id: 3, name: 'Alex', surname: 'Leenders', position: 'team leader', accesses: [1,2,3], projects: [1,2]},
        },
            ]
    },{
        id: 2,
        name: 'New project',
        developersId: [0, 1, 3, 6],
        tasks: [{
            id: 0,
            name: 'create project',
            description: 'This makes the changes in your file available to people you are working with.',
            priority: 7,
            status: 'newTask', //development значит кто то взял задачу, testing - кто то тестирует, ready - готово
            communication: [],
            developer: null,
            forReview: null,
            tester: null,
            creator: {id: 3, name: 'Alex', surname: 'Leenders', position: 'team leader', accesses: [1,2,3], projects: [1,2]},
        },]
    },{
        id: 3,
        name: 'New project 33',
        developersId: [0, 1, 2, 6,],
        tasks: [{
            id: 0,
            name: 'create project',
            description: 'This makes the changes in your file available to people you are working with.',
            priority: 7,
            status: 'newTask', //development значит кто то взял задачу, testing - кто то тестирует, ready - готово
            communication: [],
            developer: null,
            forReview: null,
            tester: null,
            creator: {id: 2, name: 'Andrey', surname: 'Lukichev', position: 'team leader', accesses: [1,2,3], projects: [0,3]},
        },]
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
        setCurrentProjectId: (state:initialStateType, action:{payload: {currentProject: number | null}}) => {
            state.currentProjectId = action.payload.currentProject;
        },
        addNewTaskToProject: (state:initialStateType, action:{payload:
                {currentUser: userType, name: string, description: string, priority: number}}) => {
            let indexProject = state.projects.findIndex(el => el.id === state.currentProjectId);
            const newTask: taskType = {
                id: state.projects[indexProject].tasks.length !==0?
                    state.projects[indexProject].tasks[state.projects[indexProject].tasks.length - 1].id + 1
                    : 0,
                name: action.payload.name,
                description: action.payload.description,
                priority: action.payload.priority,
                status: 'newTask', //development значит кто то взял задачу, testing - кто то тестирует, ready - готово
                communication: [],
                developer: null,
                forReview: null,
                tester: null,
                creator: action.payload.currentUser,
            }
            state.projects[indexProject].tasks.push(newTask);
        },
        addNewProject: (state:initialStateType, action:{payload:{name: string, developersId: Array<number>}}) => {
            const newProject:projectType = {
                id: state.projects[state.projects.length-1].id + 1,
                name: action.payload.name,
                developersId: action.payload.developersId,
                tasks: []
            }
            state.projects.push(newProject)
        },
        addNewUserToProject: (state:initialStateType, action:{payload: {users: Array<userType>, projectId: number}}) =>
        {
            const newDevelopersId = action.payload.users.map(el => el.id);
            const oldDevelopersId = state.projects.filter(el => el.id === action.payload.projectId)[0].developersId
            state.projects.filter(el => el.id === action.payload.projectId)[0].developersId = [...oldDevelopersId, ...newDevelopersId]
        },
        readAllMessageInTask: (state:initialStateType, action:{payload: {userId: number, taskId: number}}) =>
        {
            let indexProject = state.projects.findIndex(el => el.id === state.currentProjectId);
            let indexTask = state.projects[indexProject].tasks.findIndex(el => el.id === action.payload.taskId);
            state.projects[indexProject].tasks[indexTask].communication.forEach(el => {
                el.whoRead = el.whoRead.includes(action.payload.userId) ? el.whoRead : [...el.whoRead, action.payload.userId]
            })
        }
    },

})

export const {takeTaskForDevelopment, takeTaskForReview, giveTaskForReview, approveTask, sendMessage,
    takeTaskForRevision, setCurrentProjectId, addNewTaskToProject, addNewProject, addNewUserToProject,
    readAllMessageInTask} = projectSlice.actions

export default projectSlice.reducer