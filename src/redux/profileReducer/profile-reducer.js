import { stopSubmit } from 'redux-form';
import { profileErrorMessagesFinder } from '../../utils/object-helpers';
import {profileAPI} from '../../api/api'

//Обьявление типов actionCreators
const SET_PROFILE = 'profile-reducer/SET_PROFILE';
const SET_STATUS = 'profile-reducer/SET_STATUS';
const SET_UPDATE_PROFILE_SUCCESS = 'profile-reducer/SET_UPDATE_PROFILE_SUCCESS';
const SET_UPDATE_PROFILE_IS_FETCHING = 'profile-reducer/SET_UPDATE_PROFILE_IS_FETCHING';
const SET_PROFILE_IS_LOADING = 'profile-reducer/SET_PROFILE_IS_LOADING';
const UPLOAD_PHOTO_IS_FETCHING = 'profile-reducer/UPLOAD_PHOTO_IS_FETCHING';
const UPLOAD_PHOTO_SUCCESS = 'profile-reducer/UPLOAD_PHOTO_SUCCESS';


const initialState = {
    profile: null,
    status: '',
    updateProfileSuccess: false,
    updateProfileIsFetching: false,
    profileIsLoading: false,
    uploadPhotoIsFetching: false,
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PROFILE: 
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SET_UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                updateProfileSuccess: action.value
            };
        case SET_UPDATE_PROFILE_IS_FETCHING:
            return {
                ...state,
                updateProfileIsFetching: action.value
            };
        case SET_PROFILE_IS_LOADING:
            return {
                ...state,
                profileIsLoading: action.value
            };
        case UPLOAD_PHOTO_IS_FETCHING:
            return {
                ...state,
                uploadPhotoIsFetching: action.value
            };
        case UPLOAD_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        default: 
            return state;
    };
};

//Обьявление actionCreators
export const setProfile = (profile) => ({type: SET_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setUpdateProfileSuccess = (value) => ({type: SET_UPDATE_PROFILE_SUCCESS, value});
export const setUpdateProfileIsFetching = (value) => ({type: SET_UPDATE_PROFILE_IS_FETCHING, value});
export const setProfileIsLoading = (value) => ({type: SET_PROFILE_IS_LOADING, value});
export const setUploadPhotoIsFetching = (value) => ({type: UPLOAD_PHOTO_IS_FETCHING, value});
export const uploadPhotoSuccess = (photos) => ({type: UPLOAD_PHOTO_SUCCESS, photos});

//Обьявление thun-ок
export const getProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfile(userId);

    dispatch(setProfile(data)); 
    dispatch(setProfileIsLoading(false));

};

export const getStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));
};

export const updateStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status);

    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    };
};

export const saveUpdateProfile = (formData) => async (dispatch, getState) => {
    dispatch(setUpdateProfileSuccess(false));
    dispatch(setUpdateProfileIsFetching(true));

    let data = await profileAPI.saveUpdateProfile(formData);

    dispatch(setUpdateProfileIsFetching(false));

    if (data.resultCode === 0){
        dispatch(setUpdateProfileSuccess(true));
        const userId = getState().auth.id;
        dispatch(getProfile(userId));
    } else {
        const messages = data.messages;   //Обработка ошибок
        dispatch(stopSubmit("profile-update-form", profileErrorMessagesFinder(messages))); //отправления списка ошибок в форму
    }
};

export const uploadPhoto = (file) => async (dispatch) => {
    try {
        dispatch(setUploadPhotoIsFetching(true)); //Блокировка кнопки загрузки фото
        let data = await profileAPI.uploadPhoto(file); //Отправка Put запроса

        if (data.resultCode === 0) {       
            dispatch(uploadPhotoSuccess(data.data.photos)); //Обновление фото в state
        }
    } 
    finally {
        dispatch(setUploadPhotoIsFetching(false)); // Разблокировка кнопки загрузки фото
    }
    

}



export default profileReducer;