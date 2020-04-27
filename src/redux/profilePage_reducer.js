const newPost = "newPost";
const addNewPostText = "addNewPostText";


const profilePageReducer = (state, action) => {

    switch (action.type) {

        case newPost:
            let post = {
                id: 4,
                message: state.newPostText,
                likes: 2,
            };
            state.posts.push(post);
            state.newPostText = '';
            return state;

        case addNewPostText:
            state.newPostText = action.newText;
            return state;

        default:
            return state;


    }

};

export let addPostActionCreator = () => {

    return { type: newPost}
};
export let onPostChangeActionCreator = (text) => {

    return { type: addNewPostText, newText: text }
};

export default profilePageReducer;
