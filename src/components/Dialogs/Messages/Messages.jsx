import React from 'react';
import m from '../Dialogs.module.css';



let Messages = (props) => {
    return (
        <div className={m.messag}>
            {props.message}
        </div>
    )
}



export default Messages;