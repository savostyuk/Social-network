import {rerenderEntireTree} from "../render";

let state = {
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

}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export let updateNewPostText = (newtext) => {
    state.profilePage.newPostText = newtext;
    rerenderEntireTree(state);
}
export default state;