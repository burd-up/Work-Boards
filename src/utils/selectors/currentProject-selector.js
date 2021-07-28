export function currentProjectSelector(projects, currentProjectId) {
    const currentProject = projects.filter(el => el.id === currentProjectId);
    return currentProject[0]
}