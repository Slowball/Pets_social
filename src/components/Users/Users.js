import React from "react";
import m from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../asets/image/userPhoto.png'

let Users = (props) => {
let getComponent = () => {

    axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {props.setUser(response.data.items)})};

    return <div className={m.m}>
        <button onClick={getComponent}>Нажми для загрузки</button>
        {
            props.users.map(u => <div key={u.id}>
                <stan>
                    <div>
                        <img src={u.photos.small != null ? u.photos: userPhoto} alt='user_avatar'/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.follows(u.id)}}>Follow</button>
                            :<button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>}
                    </div>
                </stan>
                <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                    <span>
                    <div>{"u.location.city"}</div>
                    <div>{"u.location.country"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;