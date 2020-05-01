import React from 'react';
import m from './Menu.module.css';
import Friends from "./Friends/Friends";
import {NavLink} from "react-router-dom";


function Menu (props) {

    let friend = props.friends.friendsName
        .map(e => <Friends name={e.name} id={e.id} url={e.url}/>);


    return (

        <nav className={m.nav}>
            <div>
                <NavLink to='/profile' activeClassName={m.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/messages' activeClassName={m.active}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/news' activeClassName={m.active}>News</NavLink>,
            </div>
            <div>
                <NavLink to='/music' activeClassName={m.active}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' activeClassName={m.active}>Settings</NavLink>
            </div>
            <div>
                <NavLink to='/users' activeClassName={m.active}>Users</NavLink>
            </div>
            <p>friends</p>
            <div className={m.friend}>

                {friend}

            </div>


        </nav>
        
    )
}

export default Menu;