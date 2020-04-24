import React from 'react';
import m from './Main.module.css';
import MyPosts from "./My_posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./My_posts/Postss/Post";


function Main (props) {

    return (


        <div className={m.main}>
            <ProfileInfo/>
            <MyPosts/>
            {props.postsElements}
        </div>

    )
}
export default Main;