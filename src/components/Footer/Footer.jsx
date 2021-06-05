import style from './Footer.module.css';
import vk from './../../assets/image/icons/social/vk.svg';
import gmail from './../../assets/image/icons/social/gmail.svg';
import mailru from './../../assets/image/icons/social/mailru.svg';
import phone from './../../assets/image/icons/phone.svg';
import instagram from './../../assets/image/icons/social/instagram.svg';
import fb from './../../assets/image/icons/social/fb.svg';


const Footer = (props) => {
    return (
        <div className = {style.wrapper}>
            <div className = {style.container}>

                add info
                
                <div className = {style.sites}>
                    <span className = {style.site}>
                        <a href = 'https://vk.com/danila.shishkin' target = '_blank' rel="noreferrer" >
                            <img src = {vk}  alt = "vk" />
                        </a>
                    </span>
                    <span className = {style.site}>
                        <a href = 'https://www.instagram.com' target = '_blank' rel="noreferrer">
                            <img src = {instagram}  alt = "instagram" />
                        </a>
                    </span>
                    <span className = {style.site}>
                        <a href = 'https://www.facebook.com' target = '_blank' rel="noreferrer">
                            <img src = {fb}  alt = "fb" />
                        </a>
                    </span>
                    <span className = {style.site}>
                        <a href = 'https://mail.google.com/' target = '_blank' rel="noreferrer">
                            <img src = {gmail}  alt = "gmail"  />
                        </a>
                    </span>
                    <span className = {style.site}>
                        <a href = 'https://mail.ru/' target = '_blank' rel="noreferrer">
                            <img src = {mailru}  alt = "mailru" />
                        </a>
                    </span>
                </div>
                <div className = {style.phoneNumber}>
                    <img src = {phone} alt = 'phone' height = '24px' width = '24px' />
                    <span>+7-904-141-54-00</span>
                </div>

            </div>
        </div>
    )
}

export default Footer;