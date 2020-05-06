import {author} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            };
        default:
            return {
                ...state,
            }
    }
};

export let setAuthUserDate = (id, email, login, isAuth) => ({type:SET_USER_DATA, data: {id, email, login, isAuth}});

export let authentication = () => {
    return (dispatch) => {
        author.authorize()
            .then(data => {
                if(data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserDate(id, email, login, true));
                }
            });
    }
};

export let login = (email, password, rememberMe) => {
    return (dispatch) => {
        author.login(email, password, rememberMe)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(authentication());
                } else {

                    let message = data.data.messages.length > 0 ? data.data.messages[0] : 'some error';
                    dispatch(stopSubmit('loginAuth', {_error: message}));
                }
            });
    }
};

export let logout = () => {
    return (dispatch) => {
        author.logout()
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(setAuthUserDate(null, null, null, false));
                }
            });
    }
}

export default authReducer;
