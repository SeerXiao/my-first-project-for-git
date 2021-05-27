export const getCurrentPage = (state) => {
    return state.users.currentPage;
};

export const getPageSize = (state) => {
    return state.users.pageSize;
};

export const getUsers = (state) => {
    return state.users.users;
};

export const getTotalUsersCount = (state) => {
    return state.users.totalUsersCount;
};

export const getUsersIsFetching = (state) => {
    return state.users.isFetching;
};

export const getFollowingProgress = (state) => {
    return state.users.followingProgress;
};
