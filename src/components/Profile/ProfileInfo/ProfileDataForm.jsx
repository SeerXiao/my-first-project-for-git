import cn from "classnames";
import { reduxForm } from "redux-form"
import { maxLengthCreator, required } from "../../../utils/validators/validator";
import { createFormField, Input, TextArea } from "../../common/FormControl/FormControl";
import PushButton from "../../common/PushButton/PushButton";
import SubmitButton from "../../common/SubmitButton/SubmitButton";
import style from './ProfileDataForm.module.css';


const maxLength30 = maxLengthCreator(30);
const maxLength300 = maxLengthCreator(300);

const ProfileDataForm = ({profile, handleSubmit, updateProfileIsFetching, cancelEditMode}) => {
    return (
        <div className = {style.wrapper}>
            <div className = {style.container}>
                <form onSubmit = {handleSubmit}>
                    <div className = {style.row}>
                        <div className = {style.nameRow}>
                            Full name:
                        </div>
                        <div className = {style.valueRow}>
                            {createFormField('fullName', Input, 'Full name', [required, maxLength30], {fieldStyle: style.inputField, wrapperStyle: style.inputWrapper})}
                        </div>
                    </div>
                    <div className = {style.row}>
                        <div className = {style.nameRow}>
                            About me: 
                        </div>
                        <div className = {style.valueRow}>
                            {createFormField('aboutMe', Input, 'About me', [required, maxLength300], {fieldStyle: style.inputField, wrapperStyle: style.inputWrapper})}
                        </div>
                    </div>
                    <div className = {style.row}>
                        <div className = {style.nameRow}>
                            Loking for a job:
                        </div>
                        <div className = {style.valueRow}>
                            {createFormField('lookingForAJob', Input, 'Lookin for a job', [], {type: 'checkbox', fieldStyle: style.checkboxField, wrapperStyle: style.checkboxWrapper})}
                        </div>
                    </div>
                    <div className = {style.row}>
                        <div className = {style.nameRow}>
                            About my skills: 
                        </div>
                        <div className = {style.valueRow}>
                            {createFormField('lookingForAJobDescription', TextArea, 'About my skills', [required], {fieldStyle: style.textareaField, wrapperStyle: style.textareaWrapper})}
                        </div>
                    </div>
                        
                    <div className = {style.contact}>
                        <div className = {style.row}>
                            <h4>
                                Contacts:
                            </h4>                      
                            {Object.entries(profile.contacts).map(item => {
                            return <div key = {item[0]}>
                                    <div className = {cn(style.nameRow,{[style.contactsName]: true})}>
                                        {item[0]}:
                                    </div>             
                                    <div className = {cn(style.valueRow, {[style.contactsValue]: true})}>
                                        {createFormField( 'contacts.' + item[0] , Input, item[0], [], 
                                        {fieldStyle: style.inputField, wrapperStyle: style.inputWrapper, formControlStyle: style.formControlStyle})}
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                    
                    <SubmitButton text = 'Save' />
                    <PushButton text = 'Cancel' onHandleChange = {cancelEditMode} />
                    
                </form>
            </div>
        </div>
    )
}


export default reduxForm({form: "profile-update-form"})(ProfileDataForm);