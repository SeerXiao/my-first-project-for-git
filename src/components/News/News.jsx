import style from './News.module.css';
import Post from './Posts/Post';


const News = (props) => {

    const posts = props.posts.map (p => {
        return (
            <div key = {p.id + 'p'} className = {style.item}>
                <Post {...p}  />
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

export default News;