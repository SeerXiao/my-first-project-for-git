import cn from 'classnames';
import style from './SubmitButton.module.css';


const SubmitButton = ({active, onHandleChange, text}) => {

    return (
        <div className = {style.container}>
            <label  htmlFor = "mySubmit" className= {cn(style.chous,{[style.loading]: active})}>{text}</label>
            <input
                type="submit"
                id = 'mySubmit' 
                className = {style.input}
                disabled = {active} 
                onChange = {onHandleChange}
            />
        </div>
    )
}

export default SubmitButton;