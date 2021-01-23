import {authAPI, profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: 'Это моя страница', likesCount: 12},
        {id: 2, message: 'Сегодня 23 января 2021 года', likesCount: 123},
        {id: 3, message: 'Пост ни о чем', likesCount: 5},
        {id: 4, message: 'Оно как бы работает но надо тестить', likesCount: 222},
    ],
    profile: null,
    status: '',

}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state;
    }

}

export const addPostAC = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatusAC = (status) => ({type: SET_STATUS, status});
export const deletePostAC = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccessAC = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});


export const getUserProfileTC = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfileAC(response.data));
};

export const getStatusTC = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatusAC(response.data));
};

export const updateStatusTC = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) //0 если ответ от сервера успешно
        dispatch(setStatusAC(status));
};

export const savePhotoTC = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) //0 если ответ от сервера успешно
        dispatch(savePhotoSuccessAC(response.data.data.photos));
};

export const saveProfileTC = (profile) => async (dispatch, getState) => {
    let response = await profileAPI.saveProfile(profile);
    const userId = getState().auth.userId;
    if (response.data.resultCode === 0) {//0 если ответ от сервера успешно
        dispatch(getUserProfileTC(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
};

export default profileReducer;
