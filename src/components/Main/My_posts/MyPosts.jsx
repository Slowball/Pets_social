import React from 'react';
import Post from './Postss/Post'
import m from './MyPosts.module.css';


function MyPosts(props) {

    let postsElements = props.profilePage.posts
        .map(posts => <Post message={posts.message} likes={posts.likes} /> );

    let createElement = React.createRef();

    let addPost = () => {
        let text = createElement.current.value;
        props.newPost(text);
    };

    let onPostChange = () => {
        let text = createElement.current.value;
        props.addNewPostText(text);
    }
    return (

        <div className={m.item}>
            <div>
                <textarea ref={createElement} onChange={onPostChange} value={props.profilePage.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>


    )
}

export default MyPosts;