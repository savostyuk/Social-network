const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState = {
    messages: [
        {id: 1, message: 'Привет! Как дела?'},
        {id: 2, message: 'Напиши что-нибудь...'},
        {id: 3, message: 'Когда ты приедешь?'},
        {id: 4, message: 'Я тебе позвоню!'},
    ],
    dialogs: [
        {id: 1, name: 'Дмитрий'},
        {id: 2, name: 'Андрей'},
        {id: 3, name: 'Светлана'},
        {id: 4, name: 'Елена'},
        {id: 5, name: 'Екатерина'},
        {id: 6, name: 'Наталья'},
    ],
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return  {
                ...state,
                messages: [...state.messages, {id: 7, message: body}],
            };
        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;
