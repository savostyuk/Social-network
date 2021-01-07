import React from 'react';
import {sendMessageActionCreator, updateMessageBodyActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) =>{
            dispatch(updateMessageBodyActionCreator(body));
        },
        sendMessage: () =>{
            dispatch(sendMessageActionCreator());
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;