import logo from './img/click copy1.png'

const NavMenu = () => {
    
    return (
        <>
        <div className="nav-menu" id="nav-menu">
            <header>
                <div className="header-main-menu">
                    <a href="/"><img src={logo} className="menu-logo"></img></a>
                </div>
            </header>
            <a href="" className="menu-closer"><i className="fas fa-times"></i></a>
            
            <div className="menu-container">
                <div className="menu-item">
                    <ul>
                        <li><a href="https://github.com/Bekir-Akok" target="_blank" >GitHub</a></li>
                        <li><a href="">Linkedin</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}


export default NavMenu