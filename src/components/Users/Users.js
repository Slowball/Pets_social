import React from "react";
import m from './Users.module.css';
import userPhoto from '../../asets/image/userPhoto.png'
import {NavLink} from "react-router-dom";


let Users = (props) => {

    let pageCounts = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCounts; i++) {
        pages.push(i)
    };
    return <div className={m.m}>
        {pages.map(p => {
            return <span className={props.currentPage === p && m.selectedPage}
                         onClick={(e) => {
                             props.onPageChanged(p)
                         }}>{p}</span>
        })}
        {props.users.map(u => <div key={u.id}>
            <stan>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos : userPhoto} alt='user_avatar'/>
                    </NavLink>
                </div>
                <div>
                    {u.followed ? <button disabled={props.toggleFollowing.some(id => id === u.id)} onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button> :
                        <button disabled={props.toggleFollowing.some(id => id === u.id)} onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
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

};

export default Users;