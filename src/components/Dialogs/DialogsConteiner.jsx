import React from 'react';
import {addMessageActionCreator, newMessageActionCreator} from "../../redux/dialogsPage_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;