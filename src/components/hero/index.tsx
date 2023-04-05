import React from 'react';
import {FaRegPlayCircle} from 'react-icons/fa'
import logo from '../../assets/img/hero-img.svg'
const Hero = () => {
    return (
        <section id='hero'>
            <div className="hero container">
                <div className="hero--all">
                    <div className="hero--all__left">
                        <h1>Virtual Reality Business Solutions</h1>
                        <p>We have over 15 year exprience in business consultting arena. We have over 15 year exprience
                            in business consultting arena and artficial intelligence.
                        </p>
                        <div className="hero--all__left--buttons">
                            <button>Join Us</button>
                            <div className='hero--all__left--buttons__watch'>
                                <FaRegPlayCircle style={{fontSize:'24px', marginRight:'23px'}}/>
                                Watch video
                            </div>
                        </div>
                    </div>
                    <img src={logo} alt=""/>
                </div>
                <div className="hero--bg">
                    <div className="hero--bg__left">

                    </div>
                    <div className="hero--bg__right">
                        <div className="hero--bg__right--left"></div>
                        <div className="hero--bg__right--right"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
