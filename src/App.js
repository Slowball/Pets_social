import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Menu from "./components/Menu/Menu.jsx";
import Main from "./components/Main/Main.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/Main/News/News";
import Music from "./components/Main/Music/Music";
import Settings from "./components/Main/Settings/Settings";



function App() {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header />
            <Menu />
            <div className='app-wrapper-content'>

            <Route path='/profile' component={Main}/>
            <Route exact path='/messages' component={Dialogs} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />

            </div>
        </div>
        </BrowserRouter>
);
}


export default App;
