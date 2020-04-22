import React from 'react';
import Post from './Postss/Post'
import m from './MyPosts.module.css';

function MyPosts () {
    return (


            <div className={m.item}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div>
                <Post messege="Why you here?" likes='-1'/>
                <Post messege="Are you here?" likes='12'/>
                </div>
            </div>

        
    )
}
export default MyPosts;