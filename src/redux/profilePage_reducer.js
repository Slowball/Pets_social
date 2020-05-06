import {profileAPI} from "../api/api";
const SET_USER_STATUS = 'SET_USER_STATUS';
const ADD_NEW_POST = 'ADD_NEW_POST';
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
let initialState = {
    posts: [
        {id: 1, message: '"Why you here?', likes: '-1'},
        {id: 1, message: 'Are you here?', likes: '-1'},
        {id: 1, message: 'Why u don"t love me?', likes: '-1'},
    ],
    profile: null,
};

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_NEW_POST:
            let post = {
                id: 4,
                message: action.onPostChange,
                likes: 2,
            };
            return {
                ...state,
                posts: [...state.posts, post],
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


export let onPostChangeActionCreator = (onPostChange) => {return {type: ADD_NEW_POST, onPostChange}
};
export let setStatus = (status) => ({type: SET_USER_STATUS, status})

export let getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUsersProfile(data));
            });
    }
};

export let getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(date => {
                dispatch(setStatus(date));
        });
    }
};

export let updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })

    }
};


export default profilePageReducer;
