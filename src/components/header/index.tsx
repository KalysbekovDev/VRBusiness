import React from 'react';
import logo from '../../assets/img/logo.svg'
const Header = () => {
    return (
        <header id="header">
            <div className="header container py-4 flex justify-between items-center">
                <div className="logo">
                    <img src={logo} style={{width:'80px'}} alt=""/>
                </div>
                <div className="navbar text-white">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Service</a>
                    <a href="#">Pricing</a>
                    <a href="#">Blog</a>
                    <button>
                        Contact Us
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
