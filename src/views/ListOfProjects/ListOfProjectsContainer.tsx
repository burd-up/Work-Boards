import React from "react";
import {connect} from "react-redux";
import {ProjectsForUserSelector} from "../../utils/selectors/currentProject-selector";
import {setCurrentProjectId, addNewUserToProject} from "../../store/projects-reducer";
import {addProjectInArrayOfUsers} from "../../store/users-reducer";
import {RootState} from "../../store/store";
import {projectType, userType} from "../../types/types";
import ListOfProjects from "./ListOfProjects";

type MapDispatchPropsType = {
    setCurrentProjectId: (payload: { currentProject: number | null}) => void
    addNewUserToProject: (payload: {users: Array<userType>, projectId: number}) => void
    addProjectInArrayOfUsers: (payload: {users: Array<number>, projectId: number}) => void
}
type MapStatePropsType = {
    currentUser: userType
    currentProjectId: number | null
    projectsForUser: Array<projectType>
    users: Array<userType>
}
export type PropsListOfProjectsType = MapDispatchPropsType & MapStatePropsType

let mapStateToProps = (state:RootState): MapStatePropsType => {
    return {
        currentUser: state.users.currentUser,
        currentProjectId: state.projects.currentProjectId,
        projectsForUser: ProjectsForUserSelector(state.projects.projects, state.users.currentUser.id),
        users: state.users.users
    }
}
//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootState> (mapStateToProps,
    {setCurrentProjectId, addNewUserToProject, addProjectInArrayOfUsers})(ListOfProjects)