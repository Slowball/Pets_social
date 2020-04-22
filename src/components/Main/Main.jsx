import React from 'react';
import m from './Main.module.css';
import MyPosts from "./My_posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
function Main () {
    return (

        <div className={m.main}>

             <ProfileInfo/>
            <MyPosts />
        </div>
        
    )
}
export default Main;