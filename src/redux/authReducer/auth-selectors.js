export const getIsAuth = (state) => {
    return state.auth.isAuth;
};

export const getAuthorizedUserId = (state) => {
    return state.auth.id;
};

export const getAuthorizedUserLogin = (state) => {
    return state.auth.login;
};

export const getCaptchaUrlSelector = (state) => {
    return state.auth.captchaUrl;
};
