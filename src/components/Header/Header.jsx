import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return(
        <header className={classes.header}>
            <img src='https://img.favpng.com/9/14/7/logo-quiz-ultimate-food-quiz-answers-quiz-logo-game-png-favpng-CnxSwDP8SQnVVdMTdNYH9i8vz.jpg'/>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header;