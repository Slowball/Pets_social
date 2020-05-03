import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authentication} from "../../redux/auth_reducer";
import {compose} from "redux";

class HeaderContainer extends React.Component {
    componentDidMount = () => {
        this.props.authentication();
    };

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default compose (
    connect(mapStateToProps, {authentication}),
)(HeaderContainer);