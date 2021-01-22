import React from 'react';
import {Redirect, Switch, withRouter, Route, HashRouter} from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Setings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/reduxStore";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')); //не собирает сразу большой бандл
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
    catchAllUnhandleErrors = (promiseRejectionEvent) => {
       /* alert("some error");*/
        console.error(promiseRejectionEvent);
    }
    componentWillMount() {
        document.title = 'Социальная сеть';
    }

    componentDidMount() {   //срабатывает 1 раз, когда компонента монтируется
        this.props.initializeApp(); //callback
        window.addEventListener("unhandledrejection", this.catchAllUnhandleErrors)
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandleErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/'
                               render={() => <Redirect to={"/profile"}/>}/>
                        <Route path='/profile/:userId?'
                               render={withSuspense(ProfileContainer)}/>
                        <Route path='/dialogs'
                               render={withSuspense(DialogsContainer)}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/login'
                               render={() => <LoginPage/>}/>
                        <Route exact path='/news' component={News}/>
                        <Route exact path='/musics' component={Music}/>
                        <Route exact path='/settings' component={Settings}/>
                        <Route exact path='*'
                               render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);  //compose применяет HOC

let SocialJSApp = (props) => { //Hash - для работы на GitHub
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}
export default SocialJSApp;
