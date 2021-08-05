import React from "react";
import {connect} from "react-redux";
import {setCurrentUser} from "../../store/users-reducer";
import Header from "./Header";
import {RootState} from "../../store/store";
import {userType} from "../../types/types";

type MapStateToProps = {
    users: Array<userType>
    currentUser: userType
}
type MapDispatchToProps = {
    setCurrentUser: (payload: userType) => void
}
export type HeaderPropsType = MapStateToProps & MapDispatchToProps;

let mapStateToProps = (state: RootState) => {
    return {
        users: state.users.users,
        currentUser: state.users.currentUser
    }
}

export default connect<MapStateToProps, MapDispatchToProps, {}, RootState>(mapStateToProps,
    {setCurrentUser,})(Header)

