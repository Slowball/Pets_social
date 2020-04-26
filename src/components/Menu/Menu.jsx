import React from 'react';
import m from './Menu.module.css';
import Friends from "./Friends/Friends";


function Menu (props) {

    let friend = props.menu.friends.friendsName
        .map(e => <Friends name={e.name} id={e.id} url={e.url}/>);


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
            </div>
            <p>friends</p>
            <div className={m.friend}>

                {friend}

            </div>


        </nav>
        
    )
}
export default Menu;