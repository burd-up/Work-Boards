import React from "react";
import {connect} from "react-redux";
import {addNewProject, setCurrentProjectId} from '../../store/projects-reducer';
import {addProjectInArrayOfUsers} from '../../store/users-reducer';
import {RootState} from "../../store/store";
import {projectType, userType} from "../../types/types";
import {currentProjectNameSelector} from "../../utils/selectors/currentProject-selector";
import AddProjectForm from "./AddProjectForm";

type MapStateToProps = {
    users: Array<userType>
    currentUser: userType
    currentProjectId: number | null
    currentProjectName: string | null
    projects: Array<projectType>
}
type MapDispatchToProps = {
    addNewProject: (payload: {name: string, developersId: Array<number>}) => void
    setCurrentProjectId: (payload: {currentProject: number | null}) => void
    addProjectInArrayOfUsers: (payload: {users: Array<number>, projectId: number}) => void
}
export type AddProjectFormType = MapStateToProps & MapDispatchToProps;

let mapStateToProps = (state: RootState) => {
    return {
        users: state.users.users,
        currentUser: state.users.currentUser,
        currentProjectId: state.projects.currentProjectId,
        currentProjectName: currentProjectNameSelector(state.projects.projects, state.projects.currentProjectId),
        projects: state.projects.projects,
    }
}

export default connect<MapStateToProps, MapDispatchToProps, {}, RootState>(mapStateToProps,
    {addNewProject, setCurrentProjectId, addProjectInArrayOfUsers,})(AddProjectForm)
