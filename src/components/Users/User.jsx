import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={styles.userWrapper}>
            <div className={styles.users}>
                <div>
                    <NavLink to={"/profile/" + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt='Фото профиля' title='Перейти на страницу'
                             className={styles.usersPhoto}/>
                    </NavLink>
                </div>

            </div>
            <div className={styles.usersInfo}>
                <div className={styles.username}>{user.name}</div>
                <div className={styles.status}>{user.status}</div>
                <div>
                    {user.followed
                        ? <button className={styles.usersButtonRed} disabled={followingInProgress
                            .some(id => id === user.id)} onClick={() => {
                            unfollow(user.id);
                        }}>Отписаться</button>
                        : <button className={styles.usersButtonGreen}
                                  disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id);
                                  }}>Подписаться</button>}
                </div>
            </div>

        </div>)
}
export default User;
