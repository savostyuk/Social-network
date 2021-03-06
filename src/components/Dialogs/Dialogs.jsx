import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (props.isAuth === false) return <Redirect to={"/login"}/>;

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}
const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={"newMessageBody"}
                       placeholder="Введите сообщение"
                       validate={[required, maxLength50]}>
                </Field>
            </div>
            <div>
                <button className={styles.sendMessage}>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)
export default Dialogs;
