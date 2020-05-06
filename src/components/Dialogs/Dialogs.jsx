import React from 'react';
import m from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogsItem";
import Messages from "./Messages/Messages";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControl/FormsControls";
import {maxLengthCreator, required} from "../../units/validators/validators";


let Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map(dialog => (<DialogsItem name={dialog.name} id={dialog.id} url={dialog.url}/>));
    let messageElements = props.dialogsPage.messages
        .map(message => <Messages message={message.message}/>);

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    };

    return (
        <div className={m.dialogs}>
            <div className={m.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={m.messages}>
                {messageElements}
            </div>
            <DialogsFormRedux onSubmit={addNewMessage}/>
        </div>
    )
};



const DialogsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'message'} name={'newMessageBody'} component={Textarea}
                       validate={[required]} />
                <div><button>send</button></div>
            </div>
        </form>
    )
};

const DialogsFormRedux = reduxForm({form: 'dialogsAddMessageForm'})(DialogsForm);

export default Dialogs;