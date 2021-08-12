import React from "react";
import {connect} from "react-redux";
import {ProjectsForUserSelector, tasksInProjectForUserSelector, userAccessibleTasksSelector} from "../../utils/selectors/currentProject-selector";
import {
    approveTask,
    giveTaskForReview,
    sendMessage,
    setCurrentProjectId,
    takeTaskForDevelopment,
    takeTaskForReview, takeTaskForRevision
} from "../../store/projects-reducer";
import {RootState} from "../../store/store";
import {projectType, taskType, userType} from "../../types/types";
import ListOfTasks from "./ListOfTasks";

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
    tasksOfUser: Array<taskType>
    userAccessibleTasks: Array<taskType> | Array<any>
}
export type PropsListOfTasksType = MapDispatchPropsType & MapStatePropsType

let mapStateToProps = (state:RootState): MapStatePropsType => {
    return {
        currentUser: state.users.currentUser,
        tasksOfUser: tasksInProjectForUserSelector(state.projects.projects, state.users.currentUser.id, state.projects.currentProjectId),
        userAccessibleTasks: userAccessibleTasksSelector(state.projects.projects, state.users.currentUser, state.projects.currentProjectId)
    }
}
//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootState> (mapStateToProps,
    {takeTaskForDevelopment, takeTaskForReview, giveTaskForReview, approveTask, sendMessage, takeTaskForRevision})(ListOfTasks)