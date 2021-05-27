import { reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validator";
import { Input, createFormField } from "../common/FormControl/FormControl";
import SubmitButton from "../common/SubmitButton/SubmitButton";
import style from './Login.module.css';

const maxLength255 = maxLengthCreator(255);
const maxLength128 = maxLengthCreator(128);

const LoginForm = ({handleSubmit, captchaUrl, getNewCaptcha, isValidEmailFormat}) => {
    const validateEmail = (e) => {
        isValidEmailFormat(e.target.value, 'login-form');
    }
    return (
        <form onSubmit = {handleSubmit} className = {style.formContainer} id = 'itsForm'>
            {createFormField('email', Input, 'Login', [required, maxLength255], {type: 'email', onBlur: validateEmail} )}
            {createFormField('password', Input, 'Password', [required, maxLength128], {type: 'password'} )}
            {captchaUrl 
            && <div>
                <img src = {captchaUrl} alt = 'captcha' />
                <button onClick = {getNewCaptcha} type = 'button'>refreshCaptcha</button>
                {createFormField('captcha', Input, '', [required], {} )}
            </div>}
            <div className = {style.logAndRem}>
                <div className = {style.rememberMe}>
                    {createFormField('rememberMe', Input, '', [], {type: 'checkbox', textInWrapper: 'Remember me', fieldStyle: style.checkbox, wrapperStyle: style.checkboxWrapper} )}
                </div>
                <div className = {style.submitButton}>
                    <SubmitButton text = 'Login'/>
                </div>      
            </div>
            
        </form>
    )
};

const ReduxLoginForm = reduxForm({form: 'login-form'})(LoginForm);

export default ReduxLoginForm;