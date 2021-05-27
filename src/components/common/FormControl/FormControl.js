import cn from 'classnames';
import { Field } from 'redux-form';
import style from './FormControl.module.css';


const FormsControl = ({meta: {touched, error}, children, formControlStyle, wrapperStyle, textInWrapper}) => {
    const hasError = touched && error;
    return (
        <div className = {cn(style.formControl, {[style.error]: hasError}, {[formControlStyle]: formControlStyle})}>
            <div className = {cn(style.fieldWrapper,{[wrapperStyle]: wrapperStyle})}>
                {children}{textInWrapper}
            </div>
            <div className = {style.errorMessage}>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )
}

export const Input = (props) => {
    const {input, meta, formControlStyle, wrapperStyle, textInWrapper, ...restProps} = props;
    return (
        <FormsControl {...props}><input {...input} {...restProps} /></FormsControl>
    )
}

export const TextArea = (props) => {
    const {input, meta, formControlStyle, wrapperStyle, textInWrapper, ...restProps} = props;
    return (
        <FormsControl {...props}><textarea {...input} {...restProps} /></FormsControl>
    )
}



export const createFormField = (name, component, placeholder, validators, props = {}, text = "") => {
    const {fieldStyle, ...restProps} = props;
    return (
        <div>
           <Field
            name = {name}
            component = {component}
            placeholder = {placeholder}
            validate = {validators}
            className = {cn(style.field,{[fieldStyle]: fieldStyle })}           
            {...restProps}
            /> {text}     
        </div>
        
    )
}