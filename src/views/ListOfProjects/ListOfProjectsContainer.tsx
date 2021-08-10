import React from "react";
import {connect} from "react-redux";
import {ProjectsForUserSelector} from "../../utils/selectors/currentProject-selector";
import {setCurrentProjectId} from "../../store/projects-reducer";
import {RootState} from "../../store/store";
import {projectType, userType} from "../../types/types";
import ListOfProjects from "./ListOfProjects";

type MapDispatchPropsType = {
    setCurrentProjectId: (payload: { currentProject: number}) => void
}
type MapStatePropsType = {
    currentUser: userType
    currentProjectId: number
    projectsForUser: Array<projectType>
}
export type PropsListOfProjectsType = MapDispatchPropsType & MapStatePropsType

let mapStateToProps = (state:RootState): MapStatePropsType => {
    return {
        currentUser: state.users.currentUser,
        currentProjectId: state.projects.currentProjectId,
        projectsForUser: ProjectsForUserSelector(state.projects.projects, state.users.currentUser.id),
    }
}
//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootState> (mapStateToProps,
    {setCurrentProjectId,})(ListOfProjects)