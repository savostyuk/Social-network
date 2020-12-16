import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

let newMessage = React.createRef();
let addMessage = () => {
    let text = newMessage.current.value;
    alert(text);
}
const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(v => <DialogItem name={v.name} id={v.id}/>);
    let messagesElements = props.state.messages.map(v => <Message message={v.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newMessage}></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}
export default Dialogs;