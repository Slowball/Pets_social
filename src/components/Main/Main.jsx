import React from 'react';
import m from './Main.module.css';
import MyPosts from "./My_posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./My_posts/Postss/Post";


function Main (props) {
    let postsElements = props.posts
        .map(posts => <Post message={posts.message} likes={posts.likes} /> );

    return (


        <div className={m.main}>
            <ProfileInfo/>
            <MyPosts/>
            {postsElements}
        </div>

    )
}
export default Main;