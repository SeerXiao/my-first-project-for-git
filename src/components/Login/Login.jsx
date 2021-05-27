import { connect } from "react-redux";
import { Redirect } from "react-router";
import { login, getCaptchaUrl, isValidEmailFormat } from "../../redux/authReducer/auth-reducer";
import { getCaptchaUrlSelector, getIsAuth } from "../../redux/authReducer/auth-selectors";
import LoginForm from "./LoginForm";
import style from './Login.module.css';



const Login = ({isAuth, login, captchaUrl, getCaptchaUrl, isValidEmailFormat}) => {

    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

    const getNewCaptcha = () => {
        getCaptchaUrl();
    } 

    if (isAuth) {
        return <Redirect to = '/profile' />
    }
    return (
        <div className = {style.wrapper}>
            <div className = {style.container}>
                <LoginForm onSubmit = {onSubmit} captchaUrl = {captchaUrl} getNewCaptcha = {getNewCaptcha} isValidEmailFormat = {isValidEmailFormat} />
            </div>
        </div>
    )
};


let mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        captchaUrl: getCaptchaUrlSelector(state),
    }
}

const LoginWithRedux = connect(mapStateToProps, {login, getCaptchaUrl, isValidEmailFormat})(Login);

export default LoginWithRedux;