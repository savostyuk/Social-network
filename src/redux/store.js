import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi! How are you?', likesCount: 11},
                {id: 2, message: 'It\'s my new post', likesCount: 12},
                {id: 3, message: 'BlaBla', likesCount: 5},
                {id: 4, message: 'YoYo', likesCount: 22},
            ],
            newPostText: 'blablabla',
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi man'},
                {id: 2, message: 'YO'},
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
        },
        sidebar: {},

    },

    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this.getState());
    },

}

export default store;
window.store = store;