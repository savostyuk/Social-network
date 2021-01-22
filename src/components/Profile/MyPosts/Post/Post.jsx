import React from 'react';
import photoProfile from '../../../../assets/images/image.JPG';
import like from '../../../../assets/images/like.png';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.item}>
            <img className={styles.photo} src={photoProfile}/>
            <div className={styles.post}>
                {props.message}
                <div className={styles.likeCount}>{props.likesCounts}<img className={styles.like} src={like}/></div>
            </div>
        </div>
    )
}
export default Post;
