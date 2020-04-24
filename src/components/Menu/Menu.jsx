import React from 'react';
import m from './Menu.module.css';
import Friends from "./Friends/Friends";


function Menu (props) {

    let friend = props.menu.friends.friendsName
        .map(e => <Friends name={e.name} id={e.id} />);


    return (

        <nav className={m.nav}>
            <div>
                {props.menu.menu.profile}
            </div>
            <div>
                {props.menu.menu.messages}
            </div>
            <div>
                {props.menu.menu.news}
            </div>
            <div>
                {props.menu.menu.music}
            </div>
            <div>
                {props.menu.menu.settings}
                {friend}
            </div>


        </nav>
        
    )
}
export default Menu;