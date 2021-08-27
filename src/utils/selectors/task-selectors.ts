import {projectType} from "../../types/types";

type statusType = 'newTask'|'development'|'testing'|'ready'

export function selectTasksByStatus(project: projectType | null, status:statusType) {
    const selectedTask = project? project.tasks.filter(el => el.status === status): [];
    return selectedTask
}