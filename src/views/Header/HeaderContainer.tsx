import React from "react";
import {connect} from "react-redux";
import {setCurrentUser,} from "../../store/users-reducer";
import {setCurrentProjectId} from '../../store/projects-reducer';
import {setCurrentColor, setIsOpenLeftMenu} from "../../store/settings-reducer";
import Header from "./Header";
import {RootState} from "../../store/store";
import {colorsThemeType, projectType, userType} from "../../types/types";
import {
    currentProjectSelector,
    unreadMessagesForAllProjectsSelector, unreadMessagesForProjectSelector
} from "../../utils/selectors/currentProject-selector";

type OwnProps = {
    setColor: (param: {palette: {primary: {main: string}, secondary: {main: string}
        }}) => void
}

type MapStateToProps = {
    messagesForAllProjects: number
    messagesForCurrentProject: number
    users: Array<userType>
    currentUser: userType
    currentProjectId: number | null
    colors: Array<colorsThemeType>
    currentColor: colorsThemeType
    currentProject: projectType | null
    isOpenLeftMenu: boolean
}
type MapDispatchToProps = {
    setCurrentUser: (payload: userType) => void
    setCurrentProjectId: (payload: {currentProject: number | null}) => void
    setCurrentColor: (payload: {name: string}) => void
    setIsOpenLeftMenu: (payload: {open: boolean}) => void
}
export type HeaderPropsType = MapStateToProps & MapDispatchToProps & OwnProps;

let mapStateToProps = (state: RootState) => {
    return {
        users: state.users.users,
        currentUser: state.users.currentUser,
        currentProjectId: state.projects.currentProjectId,
        colors: state.settings.colors,
        currentColor: state.settings.currentColor,
        currentProject: currentProjectSelector(state.projects.projects, state.projects.currentProjectId),
        messagesForAllProjects: state.users.currentUser.projects.length !== 0
            ? unreadMessagesForAllProjectsSelector(state.projects.projects, state.users.currentUser.id) : 0,
        messagesForCurrentProject: state.users.currentUser.projects.length !== 0
            ? unreadMessagesForProjectSelector(state.projects.projects.filter(el => el.id === state.projects.currentProjectId)[0],
                state.users.currentUser.id): 0,
        isOpenLeftMenu: state.settings.isOpenLeftMenu,
    }
}

export default connect<MapStateToProps, MapDispatchToProps, OwnProps, RootState>(mapStateToProps,
    {setCurrentUser, setCurrentProjectId, setCurrentColor, setIsOpenLeftMenu})(Header)

