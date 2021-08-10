import {projectType, taskType} from "../../types/types";

export function currentProjectSelector(projects: Array<projectType>, currentProjectId: number) {
    const currentProject = projects.filter(el => el.id === currentProjectId);
    return currentProject[0]
}

export function ProjectsForUserSelector(projects: Array<projectType>, currentUserId: number) {
    const UserProjects = projects.filter(el => el.developersId.includes(currentUserId));
    return UserProjects
}

export function newTasksSelector(tasks: Array<taskType>) {
    const newTasks = tasks.filter(el => el.status === 'newTask');
    return newTasks
}