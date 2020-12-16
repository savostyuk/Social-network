import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
/*    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrej'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Lena'},
        {id: 5, name: 'Katya'},
        {id: 6, name: 'Natasha'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'YO'},
        {id: 3, message: 'Kamasutra'},
    ]*/

    let dialogsElements = props.dialogs.map(v => <DialogItem name={v.name} id={v.id}/>);
    let messagesElements = props.messages.map(v => <Message message={v.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;