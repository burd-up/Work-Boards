import React from "react";
import {connect} from "react-redux";
import WorkBoard from "./WorkBoard";
import {currentProjectSelector} from "../../utils/selectors/currentProject-selector";
import {giveTaskForReview, takeTaskForDevelopment, takeTaskForReview, readAllMessageInTask, approveTask, sendMessage, takeTaskForRevision} from "../../store/projects-reducer";
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
    readAllMessageInTask: (payload: {taskId: number, userId: number}) => void
}


type MapStatePropsType = {
    currentUser: userType
    currentProject: projectType| null
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
        currentTasks: selectTasksByStatus(currentProjectSelector(state.projects.projects, state.projects.currentProjectId), 'newTask'),
        runningTasks: selectTasksByStatus(currentProjectSelector(state.projects.projects, state.projects.currentProjectId), 'development'),
        reviewTasks: selectTasksByStatus(currentProjectSelector(state.projects.projects, state.projects.currentProjectId), 'testing'),
        completedTasks: selectTasksByStatus(currentProjectSelector(state.projects.projects, state.projects.currentProjectId), 'ready'),
    }
}
//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootState> (mapStateToProps,
    {takeTaskForDevelopment, takeTaskForReview, giveTaskForReview, approveTask,
        readAllMessageInTask, sendMessage, takeTaskForRevision})(WorkBoard)