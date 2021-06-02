import PushButton from '../../common/PushButton/PushButton';
import style from './Post.module.css';
import creatorIcon from './../../../assets/image/icons/user.svg';
import calendarIcon from './../../../assets/image/icons/calendar.svg';
import eyeIcon from './../../../assets/image/icons/eye.svg';

const StandartPost = ({id, title, text, date, hints, creator, imgUrl, srcUrl}) => {

    return (
        <div className = {style.wrapper}>
            <div className = {style.container}>
                <div className = {style.imgContainer} >
                    <img className = {style.postImg} src = {imgUrl} alt = 'post image'/>
                </div>
                
                <div className = {style.description}>
                    <div className = {style.additionalInfo}>
                        <h2>
                            {title}
                        </h2>
                        <p>
                            <span><img src={creatorIcon} alt = "creator" /> {creator}</span>{' '}
                            <span><img src={calendarIcon} alt = "calendar" /> {date}</span> {' '}
                            <span><img src={eyeIcon} alt = "hints" /> {hints}</span>  
                        </p>
                    </div>
                    <div className = {style.text}>
                        {text}
                    </div>
                </div>
                <div className = {style.readMore}>
                    <PushButton text = 'Read more' styleMod = {style.actionButton}/>
                </div>
                
            </div>
        </div>
    )
};


export default StandartPost;