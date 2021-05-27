export const getProfileSelector = (state) => {
    return state.profile.profile;
};

export const getStatusSelector = (state) => {
    return state.profile.status;
};

export const getUpdateProfileSuccess = (state) => {
    return state.profile.updateProfileSuccess;
};

export const getUpdateProfileIsFetching = (state) => {
    return state.profile.updateProfileIsFetching;
};

export const getProfileIsLoading = (state) => {
    return state.profile.profileIsLoading;
};

export const getUploadPhotoIsFetching = (state) => {
    return state.profile.uploadPhotoIsFetching;
};