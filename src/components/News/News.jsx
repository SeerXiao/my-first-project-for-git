import style from './News.module.css';
import Post from './Posts/Post';


const News = (props) => {
    return (
        <div className = {style.wrapper}>
            <div className = {style.container}>
                <Post />
            </div>
        </div>
    )
}

export default News;