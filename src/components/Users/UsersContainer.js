import React from "react";
import {connect} from "react-redux";
import {
    disableFollow,
    getUsers,
    setCurrentPage,
    turnOnFollow,

} from "../../redux/users_reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getToggleFollowing,
    getTotalUsersCount, getUser
} from "../../redux/users_selectors";


class UsersAPIComponent extends React.Component {

    componentDidMount = () => {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (p) => {
        this.props.getUsers(p, this.props.pageSize);
    };


    render = () => {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.turnOnFollow}
                   unfollow={this.props.disableFollow}
                   toggleFollowingProcess={this.props.toggleFollowingProcess}
                   toggleFollowing={this.props.toggleFollowing}
            />
        </>
    }
};

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         toggleFollowing: state.usersPage.toggleFollowing,
//     }
// };

let mapStateToProps = (state) => {
    return {
        users: getUser(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        toggleFollowing: getToggleFollowing(state),
    }
};

export default compose (
    connect(mapStateToProps, {
        setCurrentPage,
        getUsers,
        disableFollow,
        turnOnFollow,
    }),
    withAuthRedirect
)(UsersAPIComponent)
