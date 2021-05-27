import Paginator from "../common/Paginator/Paginator";
import Preloader from "../common/Preloader/Preloader";
import User from "./User";
import style from './Users.module.css';


const Users = (props) => {
    return (
        <div className = {style.wrapper}>
            <Paginator 
                totalUsersCount = {props.totalUsersCount} 
                pageSize = {props.pageSize} 
                currentPage = {props.currentPage} 
                setCurrentPage = {props.setCurrentPage} 
            />
            <div className = {style.container}>
                
                {!props.isFetching 
                ? <Preloader />
                : props.users.map(user => <User className = {style.item} 
                    key = {user.id} 
                    user = {user} 
                    follow = {props.follow} 
                    unfollow = {props.unfollow} 
                    followingProgress = {props.followingProgress}
                    isAuth = {props.isAuth} />)}         
            </div>
            <Paginator 
                    totalUsersCount = {props.totalUsersCount} 
                    pageSize = {props.pageSize} 
                    currentPage = {props.currentPage} 
                    setCurrentPage = {props.setCurrentPage} 
            />
        </div>
    )
};


export default Users;