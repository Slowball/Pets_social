import React from 'react';
import m from './ProfileInfo.module.css';

function ProfileInfo() {
    return (

        <div>
            <div>
                <img className={m.img} src='https://allthatsinteresting.com/wordpress/wp-content/uploads/2018/12/female-lion-on-ground.jpg' />
            </div>
            <div className={m.discriptionBlock}>
                ava + discr
                <img className={m.ava} src='https://mtdata.ru/u18/photoF8FA/20867935481-0/original.jpg'/>
            </div>
        </div>
    )
}

export default ProfileInfo;