import React from 'react';
import m from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogsItem";
import Messages from "./Messages/Messages";

let Dialogs = (props) => {
    let dialogsElements = props.dialogs
        .map( dialog => ( <DialogsItem name={dialog.name} id={dialog.id} />));
    let messageElements = props.messages
        .map(message => <Messages name={'sisi'} message={message.message}/>)
    return (
        <div className={m.dialogs}>
          <div className={m.dialogsItems}>
              {dialogsElements}
          </div>
            <div className={m.messages}>

                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;