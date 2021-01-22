import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to='/profile' activeClassName={styles.activeLink}>Profile</NavLink>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <NavLink to='/dialogs' activeClassName={styles.activeLink}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/users' activeClassName={styles.activeLink}>Users</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/news' activeClassName={styles.activeLink}>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/musics' activeClassName={styles.activeLink}>Musics</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/settings' activeClassName={styles.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
}
export default Navbar;
