import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormsControl";

const maxLength100 = maxLengthCreator(100);

const MyPosts = React.memo((props) => {

    let postsElements = props.posts.map(v => <Post key={v.id} message={v.message} likesCounts={v.likesCount}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };


    return (
        <div className={styles.postsBlock}>
            <h3>Моя стена</h3>
            <AddPostFormRedux onSubmit={onAddPost}/>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
})

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPostText"} placeholder="Новый пост"
                       validate={[required, maxLength100]}/>
            </div>
            <div>
                <button className={styles.button}>Добавить пост</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: "profileAddNewPostForm"})(AddNewPostForm)
export default MyPosts;
