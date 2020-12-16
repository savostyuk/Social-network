import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./redux/state";
import {updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (props) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={props} addPost={addPost} updateNewPostText={updateNewPostText}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}



