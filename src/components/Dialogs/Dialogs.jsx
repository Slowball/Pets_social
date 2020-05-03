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
        let text = sendMessage.current.value;
        props.newMessage(text);
    }
    let addMessage = () =>{
        props.addMessage();
    };

    return (
        <div className={m.dialogs}>
          <div className={m.dialogsItems}>
              {dialogsElements}
          </div>
            <div className={m.messages}>

                {messageElements}
                <textarea ref={sendMessage} onChange={newMessage} value={props.dialogsPage.newMessages}/>
                <button onClick={addMessage}>send</button>
            </div>
        </div>
    )
}


export default Dialogs;