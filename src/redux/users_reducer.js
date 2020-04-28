const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";


let initialState = {
    users: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users],
            };

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(e => {
                    if (action.userID === e.id) {
                        return {...e, followed: false}
                    }
                    return e;
                })
            };
        case UNFOLLOW:
        return {
            ...state,
            users: state.users.map(e => {
                if (action.userID === e.id) {
                    return {...e, followed: true}
                }
                return e;
            })
        };
        default:
            return state;
    }


};

export let followAC = (userID) => ({type: FOLLOW, userID});
export let unfollowAC = (userID) => ({type: UNFOLLOW, userID});
export let setUsersAC = (users) => ({type: SET_USERS, users});
export default userReducer;
