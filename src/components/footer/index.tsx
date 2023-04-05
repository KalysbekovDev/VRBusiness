import React from 'react';
import logo from '../../assets/img/logo.svg'
import {HiLocationMarker} from 'react-icons/hi'
import {BiPhoneCall} from 'react-icons/bi'
import {RiMessage2Fill} from 'react-icons/ri'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {FaPinterestP} from 'react-icons/fa'


const Footer = () => {
    return (
        <footer id='footer'>
            <div className="footer-one container">
                <div className="footer-one--left">
                    <img src={logo} alt=""/>
                    <a href="#">
                        <HiLocationMarker style={{fontSize:'20px', marginRight:'10px'}}/>
                        Dhaka, Bangladesh
                    </a>
                    <a href="#">
                        <BiPhoneCall style={{fontSize:'20px', marginRight:'10px'}}/>
                        0943833399
                    </a>
                    <a href="#">
                        <RiMessage2Fill style={{fontSize:'20px', marginRight:'10px'}}/>
                        support@zone.com
                    </a>
                    <div className="footer-one--left__icons">
                        <div><FaFacebookF style={{fontSize:'20px'}}/></div>
                        <div><BsTwitter style={{fontSize:'20px'}}/></div>
                        <div><AiFillInstagram style={{fontSize:'20px'}}/></div>
                        <div><FaPinterestP style={{fontSize:'20px'}}/></div>
                    </div>
                </div>
                <div className="footer-one--right">
                    <div>
                        <h4>Service</h4>
                        <a href="#">Order Management</a>
                        <a href="#">Social Assistant</a>
                        <a href="#">Crypto Platform</a>
                        <a href="#">Analyzer of the News</a>
                    </div>
                    <div>
                        <h4>Company</h4>
                        <a href="#">About Us</a>
                        <a href="#">News</a>
                        <a href="#">Our trusted partner</a>
                        <a href="#">New users FAQ</a>
                    </div>
                    <div>
                        <h4>Supports</h4>
                        <a href="#">Help center</a>
                        <a href="#">Feedback</a>
                        <a href="#">Contact us</a>
                        <a href="#">Terms conditions</a>
                    </div>
                    <div>
                        <h4>Resources</h4>
                        <a href="#">Download app</a>
                        <a href="#">Blog</a>
                        <a href="#">What’s new</a>
                        <a href="#">Sitemap</a>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="footer-two container">
                <div className="footer-two--left">
                    <h1>© 2021 Zone. - All rights reserved.</h1>
                </div>
                <div className="footer-two--right">
                    <a href="#">Privacy</a>
                    <a href="#">Security</a>
                    <a href="#">Terms</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
