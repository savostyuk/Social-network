const SEND_MESSAGE = 'SEND_MESSAGE';


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
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return  {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            };
        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;