import { useEffect } from "react";
import { connect } from "react-redux";
import { getIsAuth } from "../../redux/authReducer/auth-selectors";
import { follow, requestUsers, unfollow } from "../../redux/usersReducer/users-reducer";
import { getCurrentPage, getFollowingProgress, getPageSize, getTotalUsersCount, getUsers, getUsersIsFetching } from "../../redux/usersReducer/users-selectors";
import Users from "./Users";

const UsersContainer = (props) => {

    let {requestUsers, currentPage, pageSize} = props;

    useEffect(() => {
        requestUsers(currentPage, pageSize);
    }, [])

    const setCurrentPage = (newCurrentPage) => {
        requestUsers(newCurrentPage, pageSize);
    }
    
    return (
        <Users {...props}  setCurrentPage = {setCurrentPage} />
    )
}


const mapStateToProps = (state) => {
    return {
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getUsersIsFetching(state),
        followingProgress: getFollowingProgress(state),
        isAuth: getIsAuth(state),
    }
};

const UsersContainerWithRedux = connect(mapStateToProps, {requestUsers, follow, unfollow})(UsersContainer);

export default UsersContainerWithRedux;