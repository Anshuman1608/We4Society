import React from 'react';
import './header.css';
import logo from '../../assets/images/logo.png'

const Header = () => {
    const redirectFb = () => {
        window.open("https://www.facebook.com/TeamWe4Society", "_blank");
    }
    const redirectTwitter = () => {
        window.open("https://twitter.com/We4Society", "_blank");
    }
    const redirectLinkedIn = () => {
        window.open("https://www.linkedin.com/company/we4society/", "_blank");
    }
    const redirectInstagram = () => {
        window.open("https://www.instagram.com/we4society", "_blank");
    }
    const redirectYoutube = () => {
        window.open("https://www.youtube.com/@we4society", "_blank");
    }
    const redirectWhatsapp = () => {
        window.open("http://wa.me/918077561199", "_blank");
    }

    return (
        <div className='mainHeader'>
            <div className="firstHeader">
                <span style={{ marginLeft: "35px", alignItems: 'left' }}>
                    <i className="bi bi-phone"></i>
                    <span style={{ margin: '5px' }}>+91 8077561199</span>
                    <i className="bi bi-envelope-fill" style={{ marginLeft: '20px' }}></i>
                    <span style={{ margin: '10px' }}>team@weforsociety.org</span>
                </span>
                <span className="position-absolute end-0">
                    <span>Follow us:</span>
                    <span className="socialMedia">
                        <button className="socialMediaButtons" onClick={redirectFb}>
                            <i className="bi bi-facebook"></i>
                        </button>
                    </span>
                    <span className="socialMedia">
                        <button className="socialMediaButtons" onClick={redirectTwitter}>
                            <i className="bi bi-twitter"></i>
                        </button>
                    </span>
                    <span className="socialMedia">
                        <button className="socialMediaButtons" onClick={redirectLinkedIn}>
                            <i className="bi bi-linkedin"></i>
                        </button>
                    </span>
                    <span className="socialMedia">
                        <button className="socialMediaButtons" onClick={redirectInstagram}>
                            <i className="bi bi-instagram"></i>
                        </button>
                    </span>
                    <span className="socialMedia">
                        <button className="socialMediaButtons" onClick={redirectYoutube}>
                            <i className="bi bi-youtube"></i>
                        </button>
                    </span>
                    <span className="socialMedia">
                        <button className="socialMediaButtons" onClick={redirectWhatsapp}>
                            <i className="bi bi-whatsapp"></i>
                        </button>
                    </span>
                </span>
            </div>
            <hr className='horizontaRule'></hr>
            <div className='secondHeader' style={{ marginTop: '0px', position: 'sticky', top: 0 }}>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src={logo} alt='Logo for We For Education Welfare Society' className='logoHeader'></img></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse position-absolute end-0 " id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        WHO WE ARE
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">About Us</a></li>
                                        <li><a className="dropdown-item" href="#">Our Team</a></li>
                                        <li><a className="dropdown-item" href="#">Mission & Vision</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">OUR WORK</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        CAREER
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Volunteer</a></li>
                                        <li><a className="dropdown-item" href="#">Trainer</a></li>
                                        <li><a className="dropdown-item" href="#">Counsellor</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">CONTACT</a>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="DonateButton">Donate Now <i className="bi bi-arrow-right-circle-fill circle-icon" style={{color: 'white' , backgroundColor:'rgb(255, 123, 0)'}}></i></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;
