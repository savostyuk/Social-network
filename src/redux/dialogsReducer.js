const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
    messages: [
        {id: 1, message: 'Hi man'},
        {id: 2, message: 'YO Yo'},
        {id: 3, message: 'Hello'},
    ],
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrej'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Lena'},
        {id: 5, name: 'Katya'},
        {id: 6, name: 'Natasha'},
    ],
    newMessageBody: "",
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            let newMessage = {
                id: 6,
                message: body,
            };
            state.messages.push(newMessage);
            state.newMessageBody = '';
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateMessageBodyActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;