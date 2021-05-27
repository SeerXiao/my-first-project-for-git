import Preloader from "../../common/Preloader/Preloader";
import avatar from './../../../assets/image/avatar.png';
import style from './ProfileInfo.module.css';
import { useEffect, useState } from "react";
import ProfileDataForm from "./ProfileDataForm";
import ProfileData from "./ProfileData";
import FileSelectButton from "../../common/FileSelectButton/FileSelectButton";
import PushButton from "../../common/PushButton/PushButton";


const ProfileInfo = (props) => {
    let {profile, status, isOwner, 
        updateStatus, saveUpdateProfile, updateProfileSuccess, 
        updateProfileIsFetching, profileIsLoading, uploadPhoto,
        uploadPhotoIsFetching } = props;

    let [editMode, setEditMode] = useState(false);

    useEffect(() => {
        if (updateProfileSuccess){
            setEditMode(false);
        };
    }, [updateProfileSuccess])

    const onProfileFormSubmit = (formData) => {
        saveUpdateProfile(formData);
    };

    const cancelEditMode = () => {
        setEditMode(false);
    };

    const uploadPhotoEvent = (e) => {
        if (e.target.files.length > 0) {
            uploadPhoto(e.target.files[0]);
        };
    };
    
    if (profileIsLoading || !profile) {
        return <div className = {style.preloader}><Preloader /></div>
    } 
    return (
        <div className = {style.container}>
            <div className = {style.leftColumn}>
                <div className = {style.profilePhotoAndAction}>
                    <div className = {style.profilePhoto}>
                        {profile.photos.large
                        ? <img className = {style.avatar} src = {profile.photos.large} alt = 'avatar' />
                        : <img className = {style.avatar} src = {avatar} alt = 'avatar' />
                        }
                        {/* <img src={profile.photos.large} alt="large" /> */}
                    </div>
                    
                    <div className = {style.profileAction} >
                        <div className = {style.editButton}>
                            {(isOwner) &&
                            <PushButton onHandleChange = {() => setEditMode(true)} disable = {!editMode} text = 'Редактировать профиль' />}
                        </div>
                        
                        {(isOwner) &&
                        <FileSelectButton
                            active = {uploadPhotoIsFetching}
                            onHandleChange = {uploadPhotoEvent}
                            acceptType = '.png, .jpg, .jpeg'
                            text = 'Обновить фото'
                        />}
                    </div>               
                </div>   
            </div>
            


            <div className = {style.rigthColumn}>
                {editMode
                ? <ProfileDataForm 
                    initialValues = {profile} 
                    profile = {profile} 
                    onSubmit = {onProfileFormSubmit} 
                    updateProfileIsFetching = {updateProfileIsFetching} 
                    cancelEditMode = {cancelEditMode}/>
                : <ProfileData 
                    profile = {profile} 
                    status = {status} 
                    isOwner = {isOwner} 
                    updateStatus = {updateStatus}/>}    
            </div>
        </div>
        
    )
}





export default ProfileInfo;