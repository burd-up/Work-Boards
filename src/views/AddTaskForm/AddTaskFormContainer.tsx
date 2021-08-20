import React from "react";
import {connect} from "react-redux";
import {addNewTaskToProject} from '../../store/projects-reducer';
import {RootState} from "../../store/store";
import {taskType, userType} from "../../types/types";
import AddTaskForm from "./AddTaskForm";
import {currentProjectNameSelector} from "../../utils/selectors/currentProject-selector";

type MapStateToProps = {
    users: Array<userType>
    currentUser: userType
    currentProjectId: number | null
    currentProjectName: string | null
}
type MapDispatchToProps = {
    addNewTaskToProject: (payload: {currentUser: userType, name: string, description: string, priority: number}) => void
}
export type AddTaskFormType = MapStateToProps & MapDispatchToProps;

let mapStateToProps = (state: RootState) => {
    return {
        users: state.users.users,
        currentUser: state.users.currentUser,
        currentProjectId: state.projects.currentProjectId,
        currentProjectName: currentProjectNameSelector(state.projects.projects, state.projects.currentProjectId)
    }
}

export default connect<MapStateToProps, MapDispatchToProps, {}, RootState>(mapStateToProps,
    {addNewTaskToProject})(AddTaskForm)
