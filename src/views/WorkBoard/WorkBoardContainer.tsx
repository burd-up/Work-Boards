import React from "react";
import {connect} from "react-redux";
import WorkBoard from "./WorkBoard";
import {currentProjectSelector} from "../../utils/selectors/currentProject-selector";
import {giveTaskForReview, takeTaskForDevelopment, takeTaskForReview, approveTask, sendMessage, takeTaskForRevision} from "../../store/projects-reducer";
import {selectTasksByStatus} from "../../utils/selectors/task-selectors";
import {RootState} from "../../store/store";
import {projectType, taskType, userType} from "../../types/types";
import RunningTask from "../Task/RunningTask";


type MapDispatchPropsType = {
    takeTaskForDevelopment: (payload: { developer: userType, taskId: number }) => void
    takeTaskForReview: (payload: { tester: userType, taskId: number }) => void
    giveTaskForReview: (payload: {taskId: number}) => void
    approveTask: (payload: {taskId: number}) => void
    sendMessage: (payload: {taskId: number, author: userType, message: string}) => void
    takeTaskForRevision: (payload: {taskId: number }) => void
}


type MapStatePropsType = {
    currentUser: userType
    currentProject: projectType
    currentTasks: Array<taskType>
    runningTasks: Array<taskType>
    reviewTasks: Array<taskType>
    completedTasks: Array<taskType>
}
export type PropsWorkBoardType = MapDispatchPropsType & MapStatePropsType

let mapStateToProps = (state:RootState): MapStatePropsType => {
    return {
        currentUser: state.users.currentUser,
        currentProject: currentProjectSelector(state.projects.projects, state.projects.currentProjectId),
        currentTasks: selectTasksByStatus(currentProjectSelector(state.projects.projects, state.projects.currentProjectId).tasks, 'newTask'),
        runningTasks: selectTasksByStatus(currentProjectSelector(state.projects.projects, state.projects.currentProjectId).tasks, 'development'),
        reviewTasks: selectTasksByStatus(currentProjectSelector(state.projects.projects, state.projects.currentProjectId).tasks, 'testing'),
        completedTasks: selectTasksByStatus(currentProjectSelector(state.projects.projects, state.projects.currentProjectId).tasks, 'ready'),
    }
}
//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootState> (mapStateToProps,
    {takeTaskForDevelopment, takeTaskForReview, giveTaskForReview, approveTask, sendMessage, takeTaskForRevision})(WorkBoard)