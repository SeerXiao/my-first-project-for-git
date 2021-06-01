import style from './Footer.module.css';
import vk from './../../assets/image/icons/vk.svg';
import gmail from './../../assets/image/icons/gmail.svg';
import mailru from './../../assets/image/icons/mailru.svg';
import phone from './../../assets/image/icons/phone.svg';

const Footer = (props) => {
    return (
        <div className = {style.wrapper}>
            <div className = {style.container}>

                add info
                
                <div className = {style.sites}>
                    <span className = {style.site}>
                        <a href = '#'>
                            <img src = {vk}  alt = "vk" />
                        </a>
                    </span>
                    <span className = {style.site}>
                        <a href = '#'>
                            <img src = {gmail}  alt = "gmail" />
                        </a>
                    </span>
                    <span className = {style.site}>
                        <a href = '#'>
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