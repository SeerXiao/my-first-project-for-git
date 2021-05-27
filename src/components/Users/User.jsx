import { NavLink } from "react-router-dom";
import PushButton from "../common/PushButton/PushButton";
import avatar from './../../assets/image/avatar.png'
import style from './User.module.css';


const User = ({user, follow, unfollow, followingProgress, isAuth}) => {

    return (
        <div className = {style.wrapper}>
            <div className = {style.container}>
                <div>

                </div>
                <div className = {style.imgContainer}>
                    <NavLink to = {`profile/${user.id}`} >
                        {user.photos.small 
                        ? <img src = {user.photos.small} alt = 'avatar' />
                        : <img src = {avatar} alt = 'avatar' />}
                    </NavLink>
                </div>
                <div className = {style.descriptionContainer}>
                    <div>
                        <b>Full name</b>: {user.name}  
                    </div>
                    <div>
                        <b>Status</b>: {user.status}       
                    </div>

                    {isAuth && (user.followed 
                    ? <PushButton text = 'unfollow' styleMod = {style.followUnfolowB} 
                        styleModContainer = {style.followUnfolowC} 
                        onHandleChange = {() => unfollow(user.id)} 
                        disable = {!followingProgress.some(id => id === user.id)}/>
                    : <PushButton text = 'follow' styleMod = {style.followUnfolowB} 
                        styleModContainer = {style.followUnfolowC} 
                        onHandleChange = {() => follow(user.id)} 
                        disable = {!followingProgress.some(id => id === user.id)} />                   
                    )}                                              
                </div>
                
            </div>
        </div>
    )
}


export default User;