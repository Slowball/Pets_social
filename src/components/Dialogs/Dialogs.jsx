import React from 'react';
import m from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

let DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={m.dialog}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

let Messages = (props) => {
    return (
        <div className={m.messag}>
            {props.message}
        </div>
    )
}

let Dialogs = (props) => {
    return (
        <div className={m.dialogs}>
          <div className={m.dialogsItems}>
              <DialogsItem name='Old dog' id='1' />
              <DialogsItem id='2' name='Funny dog'/>
              <DialogsItem id='3' name='My husband'/>
              <DialogsItem id='4' name='My.. amm'/>
              <DialogsItem id='5' name='Bad ass'/>
              <DialogsItem id='6' name='Old dog'/>
          </div>
            <div className={m.messages}>
                <Messages message='Good luck'/>
                <Messages message='Fukeeerr'/>
                <Messages message='U see this?'/>
            </div>
        </div>
    )
}

export default Dialogs;