export function selectTasksByStatus(tasks, status) {
    const selectedTask = tasks.filter(el => el.status === status);
    return selectedTask
}