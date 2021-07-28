import React from "react";
import {connect} from "react-redux";
import WorkBoard from "./WorkBoard";
import {currentProjectSelector} from "../../utils/selectors/currentProject-selector";
import {takeTaskForDevelopment} from "../../store/projects-reducer";
import {selectTasksByStatus} from "../../utils/selectors/task-selectors";

let mapStateToProps = (state) => {
    return {
        currentUser: state.users.currentUser,
        currentProject: currentProjectSelector(state.projects.projects, state.projects.currentProjectId),
        currentTasks: selectTasksByStatus(currentProjectSelector(state.projects.projects, state.projects.currentProjectId).tasks, 'newTask'),
        runningTasks: selectTasksByStatus(currentProjectSelector(state.projects.projects, state.projects.currentProjectId).tasks, 'development'),
    }
}

export default connect(mapStateToProps,{takeTaskForDevelopment,})(WorkBoard)