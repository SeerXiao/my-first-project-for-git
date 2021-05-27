import cn from 'classnames';
import logo from './../../assets/image/logo2.png';
import { NavLink } from 'react-router-dom';
import PushButton from '../common/PushButton/PushButton';
import style from './Header.module.css'

const Header = (props) => {
    const logoutOnClick = () => {
        props.logout();
    }

    return (
        <div className = {style.wrapper} >
            <div className = {style.container}>
                <div className = {style.logoWrapper}>
                    <img src = {logo} alt='Logo' />
                    <h1 className = {style.logo}>SeerXiao</h1>
                </div>
                {/* <div className = {style.searchFormWrapper}>
                   
                </div> */}
                <div className = {style.actionContainer}>
                    {props.isAuth 
                    ? <div className = {style.autorizedUser}>
                        <div className = {style.autorizedUserLogin}>{props.login}</div>
                        <PushButton onHandleChange = {logoutOnClick} text = 'logout' styleModContainer = {style.logout} styleMod = {style.actionButton}/>
                    </div>
                    : <div className = {style.buttonWrapper}>
                        <NavLink to = '/login' className = {cn(style.link)}>
                            <PushButton text = 'login' styleMod = {style.actionButton}/>
                        </NavLink>
                        <NavLink to = '/registration' className = {cn(style.link, {[style.last]: true})}>
                            <PushButton text = 'registration' styleMod = {style.actionButton}/>
                        </NavLink>            
                    </div>}
                </div>
                
                
                
            </div>
        </div>

    )
}

export default Header;