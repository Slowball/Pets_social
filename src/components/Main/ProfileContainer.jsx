import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profilePage_reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";




class ProfileContainer extends React.Component {

    componentDidMount = () => {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;
        this.props.getProfile(userId);
    };
    render() {
    return (
       <Profile {...this.props} profile={this.props.profile}/>
    )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});


export default compose (
    // withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getProfile})
)(ProfileContainer)



