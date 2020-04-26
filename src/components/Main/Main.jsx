import React from 'react';
import m from './Main.module.css';
import MyPosts from "./My_posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



function Main (props) {

    return (

        <div className={m.main}>
            <ProfileInfo/>
            <MyPosts newPost={props.newPost}
                     profilePage={props.profilePage}
                     addNewPostText={props.addNewPostText}/>
        </div>

    )
}
export default Main;