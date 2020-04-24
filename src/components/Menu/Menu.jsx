import React from 'react';
import m from './Menu.module.css';
import {NavLink} from "react-router-dom";


function Menu () {
    return (

        <nav className={m.nav}>
            <div>
                <NavLink to='/profile' activeClassName={m.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/messages' activeClassName={m.active}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/news' activeClassName={m.active}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' activeClassName={m.active}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' activeClassName={m.active}>Settings</NavLink>
            </div>

        </nav>
        
    )
}
export default Menu;