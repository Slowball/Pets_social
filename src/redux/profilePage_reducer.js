const newPost = "newPost";
const addNewPostText = "addNewPostText";

let initialState = {
    posts: [
        {id: 1, message: '"Why you here?', likes: '-1'},
        {id: 1, message: 'Are you here?', likes: '-1'},
        {id: 1, message: 'Why u don"t love me?', likes: '-1'},
    ],
    newPostText: '',
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

        default:
            return state;


    }

};

export let addPostActionCreator = () => {

    return {type: newPost}
};
export let onPostChangeActionCreator = (text) => {

    return {type: addNewPostText, newText: text}
};

export default profilePageReducer;
