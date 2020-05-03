import {profileAPI} from "../api/api";
const SET_USER_STATUS = 'SET_USER_STATUS';
const newPost = "newPost";
const addNewPostText = "addNewPostText";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
let initialState = {
    posts: [
        {id: 1, message: '"Why you here?', likes: '-1'},
        {id: 1, message: 'Are you here?', likes: '-1'},
        {id: 1, message: 'Why u don"t love me?', likes: '-1'},
    ],
    newPostText: '',
    profile: null,
};

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {

        case newPost:
            let post = {
                id: 4,
                message: state.newPostText,
                likes: 2,
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, post],
            };
        case addNewPostText:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USERS_PROFILE:
            return {
                ...state, profile: action.profile
            };
        case SET_USER_STATUS:
            return {
                ...state, status: action.status
            };
        default:
            return state;


    }

};

export let setUsersProfile = (profile) => {
    return {type: SET_USERS_PROFILE, profile}
}

export let addPostActionCreator = () => {

    return {type: newPost}
};
export let onPostChangeActionCreator = (text) => {

    return {type: addNewPostText, newText: text}
};
export let setStatus = (status) => ({type: SET_USER_STATUS, status})

export let getProfile = (userId) => {
    return (dispach) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispach(setUsersProfile(data));
            });
    }
};

export let getStatus = (userId) => {
    return (dispach) => {
        profileAPI.getStatus(userId)
            .then(date => {
            dispach(setStatus(date));
        });
    }
};

export let updateStatus = (status) => {
    return (dispach) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispach(setStatus(status))
                }
            })

    }
};


export default profilePageReducer;
