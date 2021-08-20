import React from "react";
import {connect} from "react-redux";
import {addUser} from '../../store/users-reducer';
import {RootState} from "../../store/store";
import {userType} from "../../types/types";
import AddUserForm from "./AddUserForm";

type MapStateToProps = {
    users: Array<userType>
    currentUser: userType
}
type MapDispatchToProps = {
    addUser: (payload: {name: string, surname: string, position: string, accesses: Array<number>}) => void
}
export type AddAccessesFormType = MapStateToProps & MapDispatchToProps;

let mapStateToProps = (state: RootState) => {
    return {
        users: state.users.users,
        currentUser: state.users.currentUser,
    }
}

export default connect<MapStateToProps, MapDispatchToProps, {}, RootState>(mapStateToProps,
    {addUser})(AddUserForm)
