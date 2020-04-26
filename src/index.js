import state, {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from  'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addNewMessageText, addNewPostText, newMessage, newPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";




function renderEnterTree (state) {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} newPost={newPost} addNewPostText={addNewPostText}
                     newMessage={newMessage} addNewMessageText={addNewMessageText}/>
            </React.StrictMode> </BrowserRouter>,
        document.getElementById('root')
    );
}

renderEnterTree(state);
subscribe(renderEnterTree);


serviceWorker.unregister();
