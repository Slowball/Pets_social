import React from 'react';
import ReactDOM from  'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Settings from "./components/Main/Settings/Settings";
import Post from "./components/Main/My_posts/Postss/Post";
import News from "./components/Main/News/News";
import DialogsItem from "./components/Dialogs/DialogItem/DialogsItem";
import Messages from "./components/Dialogs/Messages/Messages";

const set = <Settings settings="pizdec react"/>

let posts = [
    {id: 1, message: '"Why you here?', likes: '-1'},
    {id: 1, message: 'Are you here?', likes: '-1'},
    {id: 1, message: 'U kudding me? i kill u, fucking cat1', likes: '-1'},
];

let news = <News news={'sasi chlen'} />;

let dialogs = [
    {id: 1, name: 'Old dog'},
    {id: 2, name: 'Funny dog'},
    {id: 3, name: 'My husband'},
    {id: 4, name: 'My.. amm'},
    {id: 5, name: 'FBad ass'},
    {id: 6, name: 'Old dog'},
];

let messages = [
    {id: 1, message: 'good luck fuking bad ass'},
    {id: 2, message: 'FUkerrad2122'},
    {id: 3, message: 'u see this?'},
];




ReactDOM.render(
    <React.StrictMode>
    <App settings={set} posts={posts} news={news}
         dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
