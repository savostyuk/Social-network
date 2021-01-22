import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return(
        <header className={styles.header}>
            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button className={styles.headerButton} onClick={props.logout}>Выйти</button> </div>
                    : <NavLink to={'/login'}>Войти</NavLink>}
            </div>
        </header>
    )
}
export default Header;
