import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

 /*   let posts = [
        {id: 1, message: 'Hi! How are you?', likesCount: 11},
        {id: 2, message: 'It\'s my new post', likesCount: 12},
        {id: 3, message: 'BlaBla', likesCount: 5},
        {id: 4, message: 'YoYo', likesCount: 22},
    ]*/
    let postsElements = props.posts.map(v => <Post message={v.message} likesCounts={v.likesCount}/>);

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;