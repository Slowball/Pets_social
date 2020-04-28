import React from 'react';
import m from './Menu.module.css';
import Friends from "./Friends/Friends";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import Menu from "./Menu";

let mapStateToProps = (store) => {
    return {
        friends: store.friends,
    }
}

let MenuContainer = connect (mapStateToProps)(Menu);

export default MenuContainer;