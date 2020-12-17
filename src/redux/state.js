const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
                {id: 1, message: 'Hi'},
                {id: 2, message: 'YO'},
                {id: 3, message: 'Kamasutra'},
            ],
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Andrej'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Lena'},
                {id: 5, name: 'Katya'},
                {id: 6, name: 'Natasha'},
            ],
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this.getState());
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this.getState());
        }
    },

}
export const addPostActionCreator = () => ({type: ADD_POST});
export const newPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText:text});

export default store;
window.store = store;