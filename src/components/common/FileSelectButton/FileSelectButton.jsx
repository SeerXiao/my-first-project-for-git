import cn from 'classnames';
import style from './FileSelectButton.module.css';


const FileSelectButton = ({active, onHandleChange, acceptType, text}) => {

    return (
        <div className = {style.container}>
            <label  htmlFor = "myfile" className= {cn(style.chous,{[style.loading]: active})}>{text}</label>
            <input
                type="file" 
                className = {style.input} 
                id="myfile" 
                name="myfile" 
                accept = {acceptType}
                disabled = {active} 
                onChange = {onHandleChange}/>
        </div>
    )
}

export default FileSelectButton;