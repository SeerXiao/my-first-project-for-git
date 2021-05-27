import { usersAPI } from "../../api/api";
import { updateObjectInArray } from '../../utils/object-helpers'


const TOGGLE_IS_FETCHING = 'users-reducer/TOGGLE_IS_FETCHING';
const SET_CURRENT_PAGE = 'users-reducer/SET_CURRENT_PAGE';
const SET_USERS = 'users-reducer/SET_USERS';
const SET_TOTAL_USERS_COUNT = 'users-reducer/SET_TOTAL_USERS_COUNT';
const FOLLOW = 'users-reducer/FOLLOW';
const UNFOLLOW = 'users-reducer/UNFOLLOW';
const TOGGLE_FOLLOWING_PROGRESS = 'users-reducer/TOGGLE_FOLLOWING_PROGRESS';

const initialState = {
    users: [],
    pageSize: 12,
    currentPage: 1,
    isFetching: true,
    totalUsersCount: 0,
    followingProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        case FOLLOW:
            return { 
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            };
        case UNFOLLOW:
            return { 
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            };
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.isFetching
                ? [...state.followingProgress, action.userId]
                : state.followingProgress.filter (id => id !== action.userId)
            };
        default:
            return state;
    }
}

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const toggleFollowingProgress = (userId, isFetching) => ({type: TOGGLE_FOLLOWING_PROGRESS, userId, isFetching});

export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(false));
    dispatch(setCurrentPage(page));

    let data = await usersAPI.getUsers(page, pageSize);

    dispatch(toggleIsFetching(true));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    try {
        dispatch(toggleFollowingProgress(userId, true));

        let data = await apiMethod(userId);

        if (data.resultCode === 0) {
            dispatch(actionCreator(userId));
        };
    }
    finally {
        dispatch(toggleFollowingProgress(userId, false));
    }
} 

export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow (dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
}

export const unfollow = (userId) => async (dispatch) => {
    followUnfollowFlow (dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}


export default usersReducer;