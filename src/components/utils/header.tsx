import React from "react";
import './header.css';

const Header = () => {
    return (
        <div className="firstHeader">
            <span style={{ marginLeft: "20px" , alignItems : 'left'}} >
                <i className="bi bi-phone"></i>
                <span style={{ margin: '5px' }}>+91 8077561199</span>
                <i className="bi bi-envelope-fill" style={{marginLeft : '20px'}}></i>
                <span style={{ margin: '10px' }}>team@weforsociety.org</span>
            </span>
            <span className="position-absolute top-0 end-0">
                <span> Follow us : </span>
                <span className="socialMedia"><i className="bi bi-facebook"></i></span>
                <span className="socialMedia"><i className="bi bi-twitter"></i></span>
                <span className="socialMedia"><i className="bi bi-linkedin"></i></span>
                <span className="socialMedia"><i className="bi bi-instagram"></i></span>
                <span className="socialMedia"><i className="bi bi-youtube"></i></span>
                <span className="socialMedia"><i className="bi bi-facebook"></i></span>
                <span className="socialMedia"><i className="bi bi-whatsapp"></i></span>
            </span>
        </div>

    )
}

export default Header;