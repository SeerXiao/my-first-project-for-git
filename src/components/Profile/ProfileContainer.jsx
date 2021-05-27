import { connect } from "react-redux";
import Profile from "./Profile";
import {getProfile, getStatus, saveUpdateProfile, updateStatus, setProfileIsLoading, uploadPhoto } from '../../redux/profileReducer/profile-reducer'
import { compose } from "redux";
import { withRouter } from "react-router";
import { useEffect } from "react";
import { getProfileIsLoading, getProfileSelector, getStatusSelector, getUpdateProfileIsFetching, getUpdateProfileSuccess, getUploadPhotoIsFetching} from '../../redux/profileReducer/profile-selectors.js';
import { getAuthorizedUserId, getIsAuth } from "../../redux/authReducer/auth-selectors";

const ProfileContainer = (props) => {

    const refreshProfile = () => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = props.authorizedUserId
        };
        if (!userId) {
            props.history.push('/login');
        };

        props.setProfileIsLoading(true);
        props.getProfile(userId);
        props.getStatus(userId);  
    };

    useEffect (() => {
        refreshProfile()  
    }, [props.match.params.userId, props.isAuth]);

    return (
        <Profile {...props} isOwner = {!props.match.params.userId} />
    )
};


let mapStateToProps = (state) => {
    return {
        profile: getProfileSelector(state),
        status: getStatusSelector(state),
        isAuth: getIsAuth(state),
        authorizedUserId: getAuthorizedUserId(state),
        updateProfileSuccess: getUpdateProfileSuccess(state),
        updateProfileIsFetching: getUpdateProfileIsFetching(state),
        profileIsLoading: getProfileIsLoading(state),
        uploadPhotoIsFetching: getUploadPhotoIsFetching(state),
    }
};

const ProfileContainerWithCompose = 
compose (
    withRouter,
    connect(mapStateToProps, 
    {
    getProfile, getStatus, updateStatus,
    saveUpdateProfile, setProfileIsLoading, uploadPhoto,
    })
)(ProfileContainer);

export default ProfileContainerWithCompose;