import {projectType, taskType, userType} from "../../types/types";

export function currentProjectSelector(projects: Array<projectType>, currentProjectId: number) {
    const currentProject = projects.filter(el => el.id === currentProjectId);
    return currentProject[0]
}

export function ProjectsForUserSelector(projects: Array<projectType>, currentUserId: number) {
    const UserProjects = projects.filter(el => el.developersId.includes(currentUserId));
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
    const tasksForUser = projects.filter(el => el.id === currentProject)[0].tasks.filter(el =>
        (el.developer?.id === currentUserId || el.tester?.id === currentUserId /*|| el.creator?.id === currentUserId*/)
    )
    return tasksForUser
}

// возвращает массив доступных для пользователя новых задач
export function userAccessibleTasksSelector(projects: Array<projectType>, currentUser: userType, currentProject: number| null) {
    const accessibleDeveloperTasks = currentUser.accesses.includes(1)
        ?projects.filter(el => el.id === currentProject)[0].tasks.filter(el => el.status === 'newTask')
        :[]
    const accessibleTesterTasks = currentUser.accesses.includes(2)
        ?projects.filter(el => el.id === currentProject)[0].tasks.filter(el => el.tester === null && el.forReview === true )
        :[]
    return [...accessibleDeveloperTasks, ...accessibleTesterTasks]

/*    if (currentUser.accessLevel === 1) {
        return  projects.filter(el => el.id === currentProject)[0].tasks.filter(el => el.status === 'newTask')
    } else if(currentUser.accessLevel === 2) {
        return projects.filter(el => el.id === currentProject)[0].tasks.filter(el => el.tester === null && el.forReview === true )
    } else if(currentUser.accessLevel === 3) {
        return projects.filter(el => el.id === currentProject)[0].tasks.filter(el => el.status === 'newTask'
            || (el.forReview && el.tester === null && el.developer?.id !== currentUser.id))
    } else {
        return []
    }*/
}

export function currentProjectNameSelector(projects: Array<projectType>, currentProjectId: number| null) {
    const currentProjectName = projects.filter(el => el.id === currentProjectId)[0].name
    return currentProjectName
}