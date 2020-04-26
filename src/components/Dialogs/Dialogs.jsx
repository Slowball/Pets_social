import React from 'react';
import m from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogsItem";
import Messages from "./Messages/Messages";

let Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map( dialog => ( <DialogsItem name={dialog.name} id={dialog.id} url={dialog.url}/>));
    let messageElements = props.dialogsPage.messages
        .map(message => <Messages message={message.message}/>);

    let sendMessage = React.createRef();

    let newMessage = () => {
        let mes = sendMessage.current.value;
        props.newMessage(mes);
    }
    let addMessage = () =>{
        let mes = sendMessage.current.value;
        props.addNewMessageText(mes);
    };

    return (
        <div className={m.dialogs}>
          <div className={m.dialogsItems}>
              {dialogsElements}
          </div>
            <div className={m.messages}>

                {messageElements}
                <textarea ref={sendMessage} onChange={addMessage} value={props.dialogsPage.newMessages}/>
                <button onClick={newMessage}>send</button>
            </div>
        </div>
    )
}

export default Dialogs;