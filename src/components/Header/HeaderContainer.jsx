import { connect } from "react-redux";
import { logout } from "../../redux/authReducer/auth-reducer";
import { getAuthorizedUserLogin, getIsAuth } from "../../redux/authReducer/auth-selectors";
import Header from "./Header";

let mapStateToProps = (state) => {
    return {
        login: getAuthorizedUserLogin(state),
        isAuth: getIsAuth(state),
    }
};

const HeaderContainer = connect(mapStateToProps, {logout})(Header);

export default HeaderContainer;