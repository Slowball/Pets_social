import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authentication} from "../../redux/auth_reducer";

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
export default connect(mapStateToProps, {authentication})(HeaderContainer);