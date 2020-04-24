import React from 'react';
import Post from './Postss/Post'
import m from './MyPosts.module.css';

function MyPosts(props) {

    return (

        <div className={m.item}>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>

        </div>


    )
}

export default MyPosts;