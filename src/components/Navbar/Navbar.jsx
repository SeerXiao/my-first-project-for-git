import { NavLink } from "react-router-dom"
import style from './Navbar.module.css'


const Navbar = (props) => {
    return (
        <div className = {style.wrapper}>
            <div className = {style.container} >
                <ul className = {style.item}>
                    <div className = {style.linkWrapepr}>
                        <NavLink to = '/profile' activeClassName = {style.activeLink}>Profile</NavLink>
                    </div>              
                </ul>
                <ul className = {style.item}>
                    <div className = {style.linkWrapepr}>
                        <NavLink to = '/users' activeClassName = {style.activeLink}>Other users</NavLink>
                    </div>                    
                </ul>
                <ul className = {style.item}>
                    <div className = {style.linkWrapepr}>
                        <NavLink to = '/news' activeClassName = {style.activeLink}>Latest news</NavLink>
                    </div>                      
                </ul>
                <ul className = {style.item}>
                    <div className = {style.linkWrapepr}>
                        <NavLink to = '/blog' activeClassName = {style.activeLink}>Blog</NavLink> 
                    </div>           
                </ul>
                <ul className = {style.item}>
                    <div className = {style.linkWrapepr}>
                        <NavLink to = '/files' activeClassName = {style.activeLink}>Files</NavLink>  
                    </div>                      
                </ul>
                <ul className = {style.item}>
                    <div className = {style.linkWrapepr}>
                        <NavLink to = '/gallery' activeClassName = {style.activeLink}>Gallery</NavLink>     
                    </div>  
                </ul>
                <ul className = {style.item}>
                    <div className = {style.linkWrapepr}>
                        <NavLink to = '/events' activeClassName = {style.activeLink}>Events</NavLink>    
                    </div>            
                </ul>
                <ul className = {style.item}>
                    <div className = {style.linkWrapepr}>
                        <NavLink to = '/discussions' activeClassName = {style.activeLink}>Discussions</NavLink>    
                    </div>                  
                </ul>
            </div>            
        </div>
    )
}

export default Navbar;