import React, {Component} from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import News from "./components/Main/News/News";
import Music from "./components/Main/Music/Music";
import Settings from "./components/Main/Settings/Settings";
import DialogsConteiner from "./components/Dialogs/DialogsConteiner";
import MenuContainer from "./components/Menu/MenuContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Main/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app_reducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (

                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <MenuContainer/>
                    <div className='app-wrapper-content'>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/messages' render={() => <DialogsConteiner/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>

                    </div>
                </div>

            );
        }
    }
}


let mapStateToProps = (state) => ({initialized: state.app.initialized});


export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}),
)(App);