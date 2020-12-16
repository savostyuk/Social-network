import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
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
]
let posts = [
    {id: 1, message: 'Hi! How are you?', likesCount: 11},
    {id: 2, message: 'It\'s my new post', likesCount: 12},
    {id: 3, message: 'BlaBla', likesCount: 5},
    {id: 4, message: 'YoYo', likesCount: 22},
]

ReactDOM.render(
    <React.StrictMode>
        <App
        dialogs = {dialogs}
        messages = {messages}
        posts = {posts}
        />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
