import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Menu from "./components/Menu/Menu.jsx";
import Main from "./components/Main/Main.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/Main/News/News";
import Music from "./components/Main/Music/Music";
import Settings from "./components/Main/Settings/Settings";



function App(props) {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header />
            <Menu />
            <div className='app-wrapper-content'>

            <Route path='/profile' render={() => <Main postsElements={props.postsElements}/>}/>
            <Route exact path='/messages' render={() => <Dialogs dialogsElements={props.dialogsElements} messageElements={props.messageElements} />} />
            <Route path='/news' render={() => <News news={props.news} /> } />
            <Route path='/music' render={() => <Music/>} />
            <Route path='/settings' render={() => <Settings settings={props.settings}/>} />

            </div>
        </div>
        </BrowserRouter>
);
}


export default App;
