import React from 'react';
import './header.css';

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
    );
}

export default Header;
