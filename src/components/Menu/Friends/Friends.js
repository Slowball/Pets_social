import React from 'react';
import m from '../Menu.module.css';
import {NavLink} from "react-router-dom";

let Friends = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={m.friends}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}
export default Friends;