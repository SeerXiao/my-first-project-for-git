import style from './Post.module.css';


const Post = (props) => {

    

    return (
        <div className = {style.wrapper}>
            <div className = {style.container}>
                <div className = {style.imgContainer} >
                    {/* <ImageSlyder images = {[
                        {src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg', id: 1},
                        {src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg', id: 2}
                    ]} /> */}
                </div>
                
                <div className = {style.description}>
                    <div className = {style.additionalInfo}>

                    </div>
                    <div className = {style.text}>
                        
                    </div>
                </div>
                <button>
                    Read more
                </button>
            </div>
        </div>
    )
};


export default Post;