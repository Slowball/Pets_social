import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Main from "./components/Main/Main.jsx";
import News from "./components/Main/News/News";
import Music from "./components/Main/Music/Music";
import Settings from "./components/Main/Settings/Settings";
import DialogsConteiner from "./components/Dialogs/DialogsConteiner";
import MenuContainer from "./components/Menu/MenuContainer";
import UsersContainer from "./components/Users/UsersContainer";


function App() {

    return (

        <div className='app-wrapper'>
            <Header/>
            <MenuContainer />
            <div className='app-wrapper-content'>
                <Route path='/users' render={() => <UsersContainer />}/>
                <Route path='/profile' render={() => <Main />}/>
                <Route exact path='/messages' render={() => <DialogsConteiner />}/>
                <Route path='/news' render={() => <News />}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings />}/>

            </div>
        </div>

    );
}


export default App;
