import React from "react";
import {connect} from "react-redux";
import {setCurrentUser} from "../../store/users-reducer";
import Header from "./Header";

let mapStateToProps = (state) => {
    return {
        users: state.users.users,
        currentUser: state.users.currentUser
    }
}

export default connect(mapStateToProps,{setCurrentUser,})(Header)

