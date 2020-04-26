import store from "./redux/state";
import React from 'react';
import ReactDOM from  'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";


function renderEnterTree () {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App store={store}
                     dispatch={store.dispatch.bind(store)}/>
            </React.StrictMode> </BrowserRouter>,
        document.getElementById('root')
    );
}

renderEnterTree(store.getState());
store.subscribe(renderEnterTree);


serviceWorker.unregister();
