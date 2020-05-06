import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../redux/profilePage_reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";




class ProfileContainer extends React.Component {

    componentDidMount = () => {
        let userId = this.props.match.params.userId;
        if (!userId) userId = this.props.userId;
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    };
    render() {
    return (
       <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.id,
    isAuth: state.auth.isAuth,
});


export default compose (
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getStatus, updateStatus,
        getProfile})
)(ProfileContainer)



