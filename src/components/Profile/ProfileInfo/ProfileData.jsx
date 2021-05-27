import ProfileStatus from "./ProfileStatus";
import style from './ProfileData.module.css';


const ProfileData = ({profile, status, isOwner, updateStatus}) => {
    return (
        <div className = {style.wrapper}>
            <div className = {style.container}>
                <div className = {style.row}>
                    <div className = {style.nameRow}>
                        Full name:
                    </div>
                    <div className = {style.valueRow}>
                        {profile.fullName}
                    </div>
                </div>
                <div className = {style.row}>
                    <div className = {style.nameRow}>
                        Status:
                    </div>
                    <div className = {style.valueRow}>
                        <ProfileStatus status = {status} isOwner = {isOwner} updateStatus = {updateStatus}/>
                    </div>
                </div>
                <div className = {style.row}>
                    <div className = {style.nameRow}>
                        About me:
                    </div>
                    <div className = {style.valueRow}>
                        {profile.aboutMe}
                    </div>
                </div>
                <div className = {style.row}>
                    <div className = {style.nameRow}>
                        Loking for a job:
                    </div>
                    <div className = {style.valueRow}>
                        {profile.lookingForAJob ? 'yes' : 'no'}
                    </div>
                </div>
                <div className = {style.row}>
                    <div className = {style.nameRow}>
                        Full name:
                    </div>
                    <div className = {style.valueRow}>
                        
                    </div>
                </div>
                <div className = {style.row}>
                    <div className = {style.nameRow}>
                        About my skills:
                    </div>
                    <div className = {style.valueRow}>
                        {profile.lookingForAJobDescription}
                    </div>
                </div>

                <div className = {style.row}>
                    <h4>Contacts:</h4>
                    {Object.entries(profile.contacts)
                    .map(item => {
                        if(item[1]) {
                            return <Contact key = {item[0]} name = {item[0]} value = {item[1]} />
                        }
                        return null;
                    })}
                </div>
            </div>
            
        </div>
    )
}

const Contact = ({name, value}) => {
    return (
        <div className = {style.contact}>
            <div className = {style.row}>
                <div className = {style.nameContactRow}>
                    {name}:
                </div>
                <div className = {style.valueRow}>
                    {value}
                </div>
            </div>
        </div>
    )
};

export default ProfileData;