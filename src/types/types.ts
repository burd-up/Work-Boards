export type taskType = {
    id: number
    name: string
    description: string
    priority: number
    status: 'newTask' | 'development' | 'testing' | 'ready'
    communication: Array<messageType>
    forReview: boolean | null
    developer: userType | null
    tester: userType | null
    creator: userType | null
}
export type projectType = {
    id: number
    name: string
    developersId: Array<number>
    tasks: Array<taskType>
}
export type userType = {
    id: number
    name: string
    surname: string
    position: string
    accessLevel: number
    projects: Array<number>
}
export type messageType = {
    id: number
    message: string
    author: userType
    whoRead: Array<number>
}