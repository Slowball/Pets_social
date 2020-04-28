import React from 'react';
import h from './Header.module.css';
function Header () {
    return (


        <header className={h.header}>
            <img className={h.img} src={'https://avatanplus.com/files/resources/mid/5ad884519fa7b162ddc4def6.png'}/>
        </header>

    )
}
export default Header;