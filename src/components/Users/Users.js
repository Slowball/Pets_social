import React from "react";
import m from './Users.module.css'


let Users = (props) => {
if (props.users.length === 0){
    props.setUser( [
            {
                id: 1,
                followed: true,
                fullName: 'Sergey',
                status: 'Mini-gansta',
                location: {city: 'Khmennitskiy', country: 'Ukraine'},
                url: 'https://i.pinimg.com/originals/90/f2/e9/90f2e94881d19301dd28c973495db66b.jpg'
            },
            {id: 2, followed: true, fullName: 'Liza', status: 'Super-devka', location: {city: 'Kiev', country: 'Ukraine'}, url: 'https://wallpapershome.ru/images/wallpapers/pes-3840x2160-sobaka-18886.jpg'},
            {id: 3, followed: false, fullName: 'Dima', status: 'Samurai', location: {city: 'Minsk', country: 'Belarus'}, url: 'https://pbs.twimg.com/profile_images/1058201793753157633/SXcF2ilG_400x400.jpg'},
        ] );}

    return <div className={m.m}>
        {
            props.users.map(u => <div key={u.id}>
                <stan>
                    <div>
                        <img src={u.url} alt='user_avatar'/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.follows(u.id)}}>Follow</button>
                            :<button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>}
                    </div>
                </stan>
                <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                    <span>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;