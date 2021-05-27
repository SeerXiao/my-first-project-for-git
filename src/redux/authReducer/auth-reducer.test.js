import authReducer, { setCaptchaUrl, setUserData } from "./auth-reducer";



let state = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
};

describe("setUserData testing", () => {
    it("user id must be changed to transferred", () => {
        const newUserId = 22;
        const action = setUserData(newUserId);
        let newState = authReducer(state, action);
        expect(newState.id).toBe(newUserId);
    });
    it("user email must be changed to transferred", () => {
        const newUserEmail = 'seerxiao@email.ru';
        const action = setUserData(null ,newUserEmail);
        let newState = authReducer(state, action);
        expect(newState.email).toBe(newUserEmail);
    });
    it("user login must be changed to transferred", () => {
        const newUserLogin = 'seerxiao';
        const action = setUserData(null, null, newUserLogin);
        let newState = authReducer(state, action);
        expect(newState.login).toBe(newUserLogin);
    });
    it("isAuth should be true", () => {
        const newData = true;
        const action = setUserData(null, null, null, newData);
        let newState = authReducer(state, action);
        expect(newState.isAuth).toBe(newData);
    });
});

describe("setCaptchaUrl testing", () => {
    it("captchaUrl must be changed to transferred", () => {
        const newCaptchaUrl = 'something url';
        const action = setCaptchaUrl(newCaptchaUrl);
        let newState = authReducer(state, action);
        expect(newState.captchaUrl).toBe(newCaptchaUrl);
    });
});