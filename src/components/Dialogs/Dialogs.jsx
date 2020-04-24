import React from 'react';
import m from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogsItem";
import Messages from "./Messages/Messages";

let Dialogs = (props) => {

    return (
        <div className={m.dialogs}>
          <div className={m.dialogsItems}>
              {props.dialogsElements}
          </div>
            <div className={m.messages}>

                {props.messageElements}
            </div>
        </div>
    )
}

export default Dialogs;