import React from 'react';
import  {onPostChangeActionCreator} from "../../../redux/profilePage_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (onPostChange) => {dispatch(onPostChangeActionCreator(onPostChange))},
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;