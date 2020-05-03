import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsPageReducer from "./dialogsPage_reducer";
import friendsReducer from "./friends_reducer";
import newsReducer from "./news_reducer";
import profilePageReducer from "./profilePage_reducer";
import settingReducer from "./setting_reducer";
import userReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
        dialogsPage: dialogsPageReducer,
        friends: friendsReducer,
        news: newsReducer,
        profilePage: profilePageReducer,
        settings: settingReducer,
        usersPage: userReducer,
        auth: authReducer,
        form: formReducer
    }
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;