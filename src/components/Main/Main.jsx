import React from 'react';
import m from './Main.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My_posts/MyPostsContainer";




function Main (props) {

    return (

        <div className={m.main}>
            <ProfileInfo/>
            <MyPostsContainer dispatch={props.dispatch}
                     profilePage={props.profilePage}/>
        </div>

    )
}
export default Main;