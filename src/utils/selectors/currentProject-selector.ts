import {projectType, taskType, userType} from "../../types/types";

export function currentProjectSelector(projects: Array<projectType>, currentProjectId: number | null) {
    const currentProject = currentProjectId !== null ? projects.filter(el => el.id === currentProjectId)[0] : null;
    return currentProject
}

export function ProjectsForUserSelector(projects: Array<projectType> | [], currentUserId: number) {
    const UserProjects = projects.length !== 0? projects.filter(el => el.developersId.includes(currentUserId)) : [];
    return UserProjects
} // отбирает проекты в которых задействован юзер

export function newTasksSelector(tasks: Array<taskType>) {
    const newTasks = tasks.filter(el => el.status === 'newTask');
    return newTasks
} // отбирает только созданные задачи для отдельлного проекта

export function availableTestingTaskSelector(tasks: Array<taskType>) {
    const newTasks = tasks.filter(el => el.forReview && el.tester === null);
    return newTasks
}

export function tasksInProjectForUserSelector(projects: Array<projectType>, currentUserId: number, currentProject: number| null) {
    const tasksForUser = currentProject !== null? projects.filter(el => el.id === currentProject)[0].tasks.filter(el =>
        (el.developer?.id === currentUserId || el.tester?.id === currentUserId /*|| el.creator?.id === currentUserId*/)
    ) : []
    return tasksForUser
}

// возвращает массив доступных для пользователя новых задач
export function userAccessibleTasksSelector(projects: Array<projectType>, currentUser: userType, currentProject: number| null) {
    const accessibleDeveloperTasks = currentUser.accesses.includes(1) && currentProject !== null
        ?projects.filter(el => el.id === currentProject)[0].tasks.filter(el => el.status === 'newTask')
        :[]
    const accessibleTesterTasks = currentUser.accesses.includes(2) && currentProject !== null
        ?projects.filter(el => el.id === currentProject)[0].tasks.filter(el => el.tester === null && el.forReview === true )
        :[]
    return [...accessibleDeveloperTasks, ...accessibleTesterTasks]
}

export function currentProjectNameSelector(projects: Array<projectType>, currentProjectId: number| null) {
    const currentProjectName = currentProjectId? projects.filter(el => el.id === currentProjectId)[0].name: null
    return currentProjectName
}

export function usersForAddingToProjectSelector(project: projectType, users: Array<userType>) {
    const usersForAdding = users.filter(el => !project.developersId.includes(el.id))
    return usersForAdding
}

export function unreadMessagesForProjectSelector(project: projectType | { tasks: Array<taskType> }, currentUserId: number) {
    const unreadMessagesLength: Array<number> = []
    project.tasks.forEach(el => {
        (el.tester?.id === currentUserId || el.developer?.id === currentUserId || el.creator?.id === currentUserId)
        && el.communication.forEach(el => {
            !el.whoRead.includes(currentUserId) && unreadMessagesLength.push(1) 
        })
    })
    return unreadMessagesLength.length
}

export function unreadMessagesForAllProjectsSelector(projects: Array<projectType>, currentUserId: number) {
    const unreadMessagesLength: Array<number> = []
    projects.forEach(project => {
        project.developersId.includes(currentUserId) && project.tasks.forEach(el => {
            (el.tester?.id === currentUserId || el.developer?.id === currentUserId || el.creator?.id === currentUserId)
            && el.communication.forEach(el => {
                !el.whoRead.includes(currentUserId) && unreadMessagesLength.push(1)
            })
        })
    })

    return unreadMessagesLength.length
}

export function unreadMessagesForTaskSelector(task: taskType, currentUserId: number) {
    const unreadMessagesLength = task.communication.filter(el => !el.whoRead.includes(currentUserId)).length
    return unreadMessagesLength
}

export function tasksCreatedByTheUserSelector(project: projectType, currentUserId: number) {
    const createdTasks: Array<taskType> = []
    project.tasks.forEach(el => {
        (el.creator?.id === currentUserId) && createdTasks.push(el)
        })
    return createdTasks
}