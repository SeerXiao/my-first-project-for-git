import usersReducer, { setUsers } from "./users-reducer";


const state = {
    users: [],
    pageSize: 12,
    currentPage: 1,
    isFetching: true,
    totalUsersCount: 0,
    followingProgress: [],
};


test('length of users should be incremented', () => {
    let action = setUsers([
        {id: 1111, fullName: 'user1'},
        {id: 2222, fullName: 'user2'}
    ]);
    let newState = usersReducer(state, action);
    expect(newState.users.length).toBe(2);
});