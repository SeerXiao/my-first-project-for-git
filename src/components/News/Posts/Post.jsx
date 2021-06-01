import PushButton from '../../common/PushButton/PushButton';
import style from './Post.module.css';


const Post = ({id, title, text, date, hints, creator, imgUrl, srcUrl}) => {

    return (
        <div className = {style.wrapper}>
            <div className = {style.container}>
                <div className = {style.imgContainer} >
                    <img src = {imgUrl} alt = 'post image'/>
                </div>
                
                <div className = {style.description}>
                    <div className = {style.additionalInfo}>
                        <h2>
                            {title}
                        </h2>
                        <p>
                            <span>creator: {creator}</span>{' '}
                            <span>date: {date}</span> {' '}
                            <span>hints: {hints}</span>  
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


export default Post;