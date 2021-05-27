import { reduxForm } from "redux-form";
import { atLeastOneLowerCaseLetter, atLeastOneUpperCaseLetter, containsAnInvalidCharacter, haveAtLeastOneDigit, maxLengthCreator, minLengthCreator, passwordMustMatch, required } from "../../utils/validators/validator";
import { Input, createFormField } from "../common/FormControl/FormControl";
import SubmitButton from "../common/SubmitButton/SubmitButton";
import style from './Registration.module.css';

const minLength8 = minLengthCreator(8);
const maxLength255 = maxLengthCreator(255);
const maxLength128 = maxLengthCreator(128);

const RegistrationForm = ({handleSubmit, isValidEmailFormat}) => {

    const validateEmail = (e) => {
        isValidEmailFormat(e.target.value, 'registration-form');
    };
    
    return (
        <form onSubmit = {handleSubmit} className = {style.formContainer}>
            <div className = {style.container}>
                {createFormField('email', Input, 'login', [required, maxLength255], {type: 'email', onBlur: validateEmail,} )}
                {createFormField('password', Input, 'password', 
                    [
                        required, minLength8, atLeastOneUpperCaseLetter, maxLength128,
                        atLeastOneLowerCaseLetter, haveAtLeastOneDigit, containsAnInvalidCharacter
                    ], 
                    {type: 'password', } )}
                {createFormField(
                    'passwordConfirmation', Input, 'password', 
                    [required, maxLength128, minLength8, passwordMustMatch], 
                    {type: 'password', } 
                )}
                <div className = {style.submitButton}>
                    <SubmitButton text = 'register'/>
                </div>
            </div>         
        </form>
    )
};

const ReduxRegistrationForm = reduxForm({form: 'registration-form'})(RegistrationForm);

export default ReduxRegistrationForm;