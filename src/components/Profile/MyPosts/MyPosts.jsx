import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormsControl";

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo((props) => {

    let postsElements = props.posts.map(v => <Post message={v.message} likesCounts={v.likesCount}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };


    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={onAddPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
})

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPostText"} placeholder="Post message" validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: "profileAddNewPostForm"})(AddNewPostForm)
export default MyPosts;