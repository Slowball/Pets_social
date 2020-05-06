import React from 'react';
import Post from './Postss/Post'
import m from './MyPosts.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../units/validators/validators";
import {Textarea} from "../../common/FormsControl/FormsControls";

function MyPosts(props) {
    let postsElements = props.profilePage.posts
        .map(posts => <Post message={posts.message} likes={posts.likes}/>);

    let addPost = (value) => {
        props.addPost(value.onPostChange);
    };
    return (
        <div className={m.item}>
         <MyPostReduxForm onSubmit={addPost}/>
            <div>
                {postsElements}
            </div>

        </div>
    )
}

const maxLength = maxLengthCreator(10);

const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <div>
                    <Field  placeholder={'post'} name={'onPostChange'} component={Textarea} validate={[required, maxLength]}/>
                </div>
                <div>
                    <button >Add post</button>
                </div>
        </form>

    )
};

const MyPostReduxForm = reduxForm({form: 'post'})(MyPostForm);

export default MyPosts;
