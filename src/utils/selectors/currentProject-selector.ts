import {projectType} from "../../types/types";

export function currentProjectSelector(projects: Array<projectType>, currentProjectId: number) {
    const currentProject = projects.filter(el => el.id === currentProjectId);
    return currentProject[0]
}