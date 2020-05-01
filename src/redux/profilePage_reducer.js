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

export default profilePageReducer;
