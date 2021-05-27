import ProfileInfo from "./ProfileInfo/ProfileInfo";
import style from './Profile.module.css'

const Profile = (props) => {

    return (
        <div className = {style.wrapper}>
            <div className = {style.container}>
                <ProfileInfo 
                {...props}
                />
            </div>           
        </div>
        
    )
}



export default Profile;