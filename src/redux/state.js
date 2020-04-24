import Settings from "../components/Main/Settings/Settings";
import News from "../components/Main/News/News";
import React from "react";
import m from "../components/Menu/Menu.module.css";
import {NavLink} from "react-router-dom";

let state = {

    profilePage: {
        posts: [
            {id: 1, message: '"Why you here?', likes: '-1'},
            {id: 1, message: 'Are you here?', likes: '-1'},
            {id: 1, message: 'U kudding me? i kill u, fucking cat1', likes: '-1'},
        ],
    },
    setting: <Settings settings="pizdec react"/>,

    news: (<News news={'sasi chlen'}/>),
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Old dog', url: 'https://sniffandwag.com/wp-content/uploads/2019/07/funniest-dogs-and-cats.jpg'},
            {id: 2, name: 'Funny dog', url: 'https://i.pinimg.com/originals/c4/90/75/c4907577a372c21c3ea70cad4b59eb07.jpg'},
            {id: 3, name: 'My husband', url: 'https://i.insider.com/5da9e261045a31389043bc43?width=1100&format=jpeg&auto=webp'},
            {id: 4, name: 'My.. amm', url: 'https://static.boredpanda.com/blog/wp-content/uploads/2020/01/funny-dog-teeth-toofers-3-5e255a95cd31e__700.jpg'},
            {id: 5, name: 'FBad ass', url: 'https://allabout-pets.com/wp-content/uploads/2019/06/funny-dog-names.jpg'},
            {id: 6, name: 'Old dog', url: 'https://sadanduseless.b-cdn.net/wp-content/uploads/2019/06/funny-dog-onesies2.jpg'},
        ],

        messages: [
            {id: 1, message: 'good luck fuking bad ass'},
            {id: 2, message: 'FUkerrad2122'},
            {id: 3, message: 'u see this?'},
        ],
    },
    menu: {
        profile: <NavLink to='/profile' activeClassName={m.active}>Profile</NavLink>,
        messages: <NavLink to='/messages' activeClassName={m.active}>Messages</NavLink>,
        news:  <NavLink to='/news' activeClassName={m.active}>News</NavLink>,
        music: <NavLink to='/music' activeClassName={m.active}>Music</NavLink>,
        settings:  <NavLink to='/settings' activeClassName={m.active}>Settings</NavLink>,

    },
    friends: {
        friendsName: [
        {id: 1, name: 'Liza'},
        {id: 2, name: "Kolia"},
        {id: 3, name: "Pidor"},
    ] },
};

export default state;