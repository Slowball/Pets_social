import React from 'react';
import m from './Main.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My_posts/MyPostsContainer";




function Profile (props) {

    return (

        <div className={m.main}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>

    )
}
export default Profile;