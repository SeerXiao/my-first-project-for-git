import preloaderImg from './../../../assets/image/Preloader.svg'
import style from './Preloader.module.css'


const Preloader = (props) => {
    return (
        <div className = {style.preloaderWrapper}>
            <img src = {preloaderImg} alt = 'loading' />
        </div>
        
    )
}

export default Preloader;