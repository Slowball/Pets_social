import {combineReducers, createStore} from "redux";
import dialogsPageReducer from "./dialogsPage_reducer";
import friendsReducer from "./friends_reducer";
import newsReducer from "./news_reducer";
import profilePageReducer from "./profilePage_reducer";
import settingReducer from "./setting_reducer";
import userReducer from "./users_reducer";
import authReducer from "./auth_reducer";

let reducers = combineReducers( {
    dialogsPage: dialogsPageReducer,
    friends: friendsReducer,
    news: newsReducer,
    profilePage: profilePageReducer,
    settings: settingReducer,
    usersPage: userReducer,
    auth: authReducer,
    }

);

let store = createStore(reducers);

export default store;

window.store = store;