import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users_reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setUser: (users) => {
            dispatch(setUsersAC(users))
        },
        follows: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        }
    }
};


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;