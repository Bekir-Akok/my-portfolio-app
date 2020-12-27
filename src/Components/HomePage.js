import logo from './img/click copy1.png'
import image1 from './img/Untitled-1 copy1.png'
import image2 from './img/Untitled-1 copy2.png'
import image3 from './img/Untitled-1 copy3.png'
import image4 from './img/Untitled-1 copy.png'
import image5 from './img/Untitled-1 copy4.png'
import image6 from './img/Untitled-1 copy5.png'
import NavMenu from './NavMenu'
import ContactMenu from './ContactMenu'
import Card from './Card'
import CardTech from './CardTech'
import Footer from './Footer'
import { useState } from 'react';

const HomePage = () => {

    const [showContent, setContent] = useState(false);
    const [showContact, setContact] = useState(false);
    const techCard = [{name:"HTML" ,src:image1},
                    {name:"CSS" ,src:image2},
                    {name:"JS" ,src:image3},
                    {name:"REACT" ,src:image4},
                    {name:"SCSS" ,src:image5},
                    {name:"GİT" ,src:image6},
                ]

    return (
        <>
        <section id="home-section">
            <header>
                <div className="header-main">
                    <div className="logo">
                        <a href="/"><img src={logo}></img></a>
                    </div>
                    <div className="menu-bars" onClick={() => setContent({showContent: !showContent})}>
                        <div className="menu-bar"></div>
                        <div className="menu-bar"></div>
                        <div className="menu-bar"></div>                    
                    </div>
                </div>
            </header>
            <div className="left-bar">
                <div className="left-bar-contact" onClick={() => setContact({showContact: !showContact})}>
                    <h1>İletişim</h1>
                    <i className="fas fa-mouse-pointer"></i>
                </div>
            </div>
            {
                showContent ? (
                    <NavMenu/>
                )
                : null
            }
            {
                showContact ? (
                    <ContactMenu/>
                )
                : null
            }
            <div className="main-container">
                <div className="main-up">
                    <Card/>
                </div>
                <div className="main-down">
                    <h1>Hangi teknolojileri kullanıyorum ?</h1>
                    <div className="main-card">
                        {techCard.map((card, i) => (
                            <CardTech key={i} name={card.name} source={card.src}/>
                        ) )}
                        
                    </div> 
                </div>
            </div>
            <Footer/>
        </section>
        </>
    )
}


export default HomePage