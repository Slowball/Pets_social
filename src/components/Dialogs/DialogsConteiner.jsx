import React from 'react';
import {addMessageActionCreator, newMessageActionCreator} from "../../redux/dialogsPage_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => dispatch(addMessageActionCreator()),
        newMessage: (text) => dispatch(newMessageActionCreator(text)),
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);