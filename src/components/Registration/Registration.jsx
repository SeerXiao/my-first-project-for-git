import { connect } from "react-redux";
import { Redirect } from "react-router";
import { isValidEmailFormat } from "../../redux/authReducer/auth-reducer";
import { getIsAuth } from "../../redux/authReducer/auth-selectors";
import RegistrationForm from "./RegistrationForm";
import style from './Registration.module.css';


const Registration = ({isAuth, isValidEmailFormat}) => {


    if (isAuth) {
        return <Redirect to = '/profile' />
    }
    return (
        <div className = {style.wrapper}>
            <div className = {style.container}>
                <RegistrationForm isValidEmailFormat = {isValidEmailFormat} />               
            </div>
        </div>
    )
};


let mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
    };
};

const RegistrationWithRedux = connect(mapStateToProps, {isValidEmailFormat})(Registration);

export default RegistrationWithRedux;