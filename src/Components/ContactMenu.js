import logo from './img/click copy1.png'
import contact1 from './img/videocall.png'
import contact2 from './img/information.png'
import contact3 from './img/id-card.png'


const ContactMenu = () => {
    return(
        <>
        <div className="nav-menu" id="contact-menu">
            <header>
                <div className="header-main-menu">
                    <a href="/"><img src={logo} className="menu-logo"></img></a>
                </div>
            </header>
            <a href="" className="menu-closer"><i className="fas fa-times"></i></a>
            <div className="menu-container">
                    <div className="menu-img">
                        <div className="menu-contact">
                            <img src={contact1}></img>
                            <a href="tel:+9005312551997">+90 531 255 1997</a>
                        </div>
                        <div className="menu-contact">
                            <img src={contact2}></img>
                            <a href="mailto:bekir.akok@hotmail.com">Tıkla Gönder <i className="fas fa-mouse-pointer"></i></a>
                        </div>
                        <div className="menu-contact">
                            <img src={contact3}></img>
                            <a href="">Linkedin</a>
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}


export default ContactMenu