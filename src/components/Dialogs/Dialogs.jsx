import React from 'react';
import m from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogsItem";
import Messages from "./Messages/Messages";

let Dialogs = (props) => {

    let dialogsElements = props.dialogs
        .map( dialog => ( <DialogsItem name={dialog.name} id={dialog.id} url={dialog.url}/>));
    let messageElements = props.messages
        .map(message => <Messages message={message.message}/>)

    let sendMessage = React.createRef();

    let addMessage = () =>{
        let mes = sendMessage.current.value;
        alert(mes);
    }
    return (
        <div className={m.dialogs}>
          <div className={m.dialogsItems}>
              {dialogsElements}
          </div>
            <div className={m.messages}>

                {messageElements}
                <textarea ref={sendMessage}></textarea>
                <button onClick={addMessage}>send</button>
            </div>
        </div>
    )
}

export default Dialogs;