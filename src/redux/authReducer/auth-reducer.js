import { stopSubmit } from "redux-form";
import { authAPI, validateAPI } from "../../api/api";


const SET_USER_DATA = 'auth-reducer/SET_USER_DATA';
const SET_CAPTHCA_URL = 'auth-reducer/SET_CAPTHCA_URL';


const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: 
            return {
                ...state,
                ...action.payload               
            };
        case SET_CAPTHCA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            };
        default: 
            return state;
    }
}

export const setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}});
export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTHCA_URL, captchaUrl});


export const authMe = () => async (dispatch) => {
    let data = await authAPI.authMe();

    if (data.resultCode === 0){
        let {id, email, login} = data.data;
        dispatch(setUserData(id, email, login, true));
    }
}


export const login = (email, password, rememberMe = false, captcha = false) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);

    if (data.resultCode === 0){
        dispatch(authMe());
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error'; 
        dispatch(stopSubmit('login-form', {_error: message}));
    }
    
}

export const getCaptchaUrl = () => async (dispatch) => {
    let data = await authAPI.getCaptchaUrl();
    let captcha = data.url;
    dispatch(setCaptchaUrl(captcha));
};

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout();

    if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
};

export const isValidEmailFormat = (email, formName) => async (dispatch) => {
    let response = await validateAPI.isValidEmailFormat(email);

    if (!response.data.is_valid_format.value) {
        dispatch(stopSubmit(formName, {'email': 'Is not valid email format'}));
    };
};


export default authReducer;