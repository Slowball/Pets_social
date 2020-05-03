import React from 'react';
import m from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';
function ProfileInfo(props) {

    if (!props.profile) {
        return <Preloader />
    }

    return (

        <div>
            {/*<div>*/}
            {/*    <img className={m.img} src='https://allthatsinteresting.com/wordpress/wp-content/uploads/2018/12/female-lion-on-ground.jpg' />*/}
            {/*</div>*/}

            <div className={m.discriptionBlock}>
                <img src={props.profile.photos.large} />
            </div>
            <ProfileStatus status={'hello world'}/>
            <div>
                <span>{props.profile.aboutMe}</span>
            </div>
            <div>
                <ul>
                    <li>{props.profile.contacts.facebook}</li>
                    <li>{props.profile.contacts.website}</li>
                    <li>{props.profile.contacts.vk}</li>
                    <li>{props.profile.contacts.twitter}</li>
                    <li>{props.profile.contacts.instagram}</li>
                    <li>{props.profile.contacts.youtube}</li>
                    <li>{props.profile.contacts.github}</li>
                    <li>{props.profile.contacts.mainLink}</li>
                </ul>
            </div>
            <div>
            <span>{props.profile.lookingForAJobDescription}</span>
            </div>
            <div>
                {props.profile.fullName}
            </div>
        </div>
    )
}

export default ProfileInfo;