import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from  'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";



    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <Provider store={store}>
                <App />
                </Provider>
            </React.StrictMode> </BrowserRouter>,
        document.getElementById('root')
    );






serviceWorker.unregister();
