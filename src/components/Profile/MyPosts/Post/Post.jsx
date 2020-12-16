import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzIo8rq6p_VE-r3ifLF3hFx0Ykg-FJpfOOAw&usqp=CAU'/>
            {props.message}
            <div>
                <span>like</span> {props.likesCounts}
            </div>
        </div>
    )
}
export default Post;