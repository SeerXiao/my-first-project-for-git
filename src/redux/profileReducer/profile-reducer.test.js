import profileReducer, { setProfileIsLoading, setStatus, setUpdateProfileIsFetching, setUpdateProfileSuccess, setUploadPhotoIsFetching, uploadPhotoSuccess } from "./profile-reducer";

const state = {
    profile: null,
    status: '',
    updateProfileSuccess: false,
    updateProfileIsFetching: false,
    profileIsLoading: false,
    uploadPhotoIsFetching: false,
};

describe("setStatus testing", () => {
    it("status must be changed to transferred", () => {
        const newStatus = 'something status';
        const action = setStatus(newStatus);
        let newState = profileReducer(state, action);
        expect(newState.status).toBe(newStatus);
    });
});

describe("setUpdateProfileSuccess testing", () => {
    it("updateProfileSuccess should be true", () => {
        const newData = true;
        const action = setUpdateProfileSuccess(newData);
        let newState = profileReducer(state, action);
        expect(newState.updateProfileSuccess).toBe(newData);
    });
});

describe("setUpdateProfileIsFetching testing", () => {
    it("updateProfileIsFetching should be true", () => {
        const newData = true;
        const action = setUpdateProfileIsFetching(newData);
        let newState = profileReducer(state, action);
        expect(newState.updateProfileIsFetching).toBe(newData);
    });
});

describe("setProfileIsLoading testing", () => {
    it("profileIsLoading should be true", () => {
        const newData = true;
        const action = setProfileIsLoading(newData);
        let newState = profileReducer(state, action);
        expect(newState.profileIsLoading).toBe(newData);
    });
});

describe("setUploadPhotoIsFetching testing", () => {
    it("uploadPhotoIsFetching should be true", () => {
        const newData = true;
        const action = setUploadPhotoIsFetching(newData);
        let newState = profileReducer(state, action);
        expect(newState.uploadPhotoIsFetching).toBe(newData);
    });
});

describe("uploadPhotoSuccess testing", () => {
    it("Photos must be changed to transferred", () => {
        const newPhotos = {large: 'firstPhoto', small: 'secondPhoto'};
        const action = uploadPhotoSuccess(newPhotos);
        let newState = profileReducer(state, action);
        expect(newState.profile.photos).toBe(newPhotos);
    });
});
