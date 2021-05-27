import cn from 'classnames';
import style from './PushButton.module.css';


const PushButton = ({disable = true, onHandleChange, text, styleMod, styleModContainer}) => {


    return (
        <div className = {cn(style.container,{[styleModContainer]: styleModContainer})}>
            <label className= {cn(style.button,{[style.disable]: disable === false, [styleMod]: styleMod})} onClick = {disable ? onHandleChange : null}>{text}</label>
        </div>
    )
}

export default PushButton;