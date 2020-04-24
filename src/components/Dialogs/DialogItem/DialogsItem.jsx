import React from 'react';
import m from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

let DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={m.dialog}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}


export default DialogsItem;