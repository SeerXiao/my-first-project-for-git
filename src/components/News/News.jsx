import cn from 'classnames';
import style from './News.module.css';
import AudioPost from './Posts/AudioPost';
import GalleryPost from './Posts/GalleryPost';
import StandartPost from './Posts/StandartPost';
import VideoPost from './Posts/VideoPost';



const News = (props) => {

    const posts = props.posts.map (p => {
        return (
            <div key = {p.id + 'p'} className = {cn(style.item,{[style[p.contentType]]: p.contentType})}>
                {p.contentType === 'gallery' ? <GalleryPost {...p} /> : null}
                {p.contentType === 'video' ? <VideoPost {...p} /> : null}
                {p.contentType === 'audio' ? <AudioPost {...p} /> : null}
                {p.contentType === 'standart' ? <StandartPost {...p} /> : null}
            </div>
        )
    })

    return (
        <div className = {style.wrapper}>
            <div className = {style.container}>
                {posts}     
            </div>
        </div>
    )
}


const Post = (props) => {
    return (
        <div >

        </div>
    )
}

export default News;