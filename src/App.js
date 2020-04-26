import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Menu from "./components/Menu/Menu.jsx";
import Main from "./components/Main/Main.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/Main/News/News";
import Music from "./components/Main/Music/Music";
import Settings from "./components/Main/Settings/Settings";


function App(props) {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Menu menu={props.store._state}/>
            <div className='app-wrapper-content'>

                <Route path='/profile' render={() =>
                    <Main profilePage={props.store._state.profilePage}
                          dispatch={props.dispatch}/>}/>
                <Route exact path='/messages' render={() =>
                    <Dialogs dialogsPage={props.store._state.dialogsPage}
                             dispatch={props.dispatch}/>}/>
                <Route path='/news' render={() => <News news={props.store._state.news}/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings settings={props.store._state.setting}/>}/>

            </div>
        </div>

    );
}


export default App;
