import React from 'react';
import h from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={h.header}>
            <img className={h.img} src={'https://avatanplus.com/files/resources/mid/5ad884519fa7b162ddc4def6.png'}/>
            <div className={h.authBlock}>
                {props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    )
};

export default Header;