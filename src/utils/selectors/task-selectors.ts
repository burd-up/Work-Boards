import {taskType} from "../../types/types";

type statusType = 'newTask'|'development'|'testing'|'ready'

export function selectTasksByStatus(tasks: Array<taskType>, status:statusType) {
    const selectedTask = tasks.filter(el => el.status === status);
    return selectedTask
}