import React from "react";
import {connect} from "react-redux";
import {addNewTaskToProject} from '../../store/projects-reducer';
import {RootState} from "../../store/store";
import {taskType, userType} from "../../types/types";
import {currentProjectNameSelector} from "../../utils/selectors/currentProject-selector";
import AddProjectForm from "./AddProjectForm";

type MapStateToProps = {
    users: Array<userType>
    currentUser: userType
    currentProjectId: number
    currentProjectName: string
}
type MapDispatchToProps = {
    addNewTaskToProject: (payload: {currentUser: userType, name: string, description: string, priority: number}) => void
}
export type AddProjectFormType = MapStateToProps & MapDispatchToProps;

let mapStateToProps = (state: RootState) => {
    return {
        users: state.users.users,
        currentUser: state.users.currentUser,
        currentProjectId: state.projects.currentProjectId,
        currentProjectName: currentProjectNameSelector(state.projects.projects, state.projects.currentProjectId)
    }
}

export default connect<MapStateToProps, MapDispatchToProps, {}, RootState>(mapStateToProps,
    {addNewTaskToProject})(AddProjectForm)
