import React from 'react';
import block_img from '../../assets/img/block-img-3.png'
import {BsArrowRight} from 'react-icons/bs'

const Services = () => {
    return (
        <section id='services'>
            <div className="services container">
                <div className="services--all">
                    <div className="services--all__title">
                        <h1>Our Service </h1>
                        <p>We turn information into actionable insights We work to understand your issues
                            and are driven to ask better questions in the pursuit of making work.</p>
                    </div>
                    <div className="services--all__blocks">
                        <div className="services--all__blocks--block">
                            <img src={block_img} alt=""/>
                            <h1>Order Management</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut
                                ut felis congue nisl hendrerit commodo.
                            </p>
                            <a href="#">
                                Learn more
                                <BsArrowRight style={{fontWeight:900}}/>
                            </a>
                        </div>
                        <div className="services--all__blocks--block">
                            <img src={block_img} alt=""/>
                            <h1>Social Assistant</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut
                                ut felis congue nisl hendrerit commodo.
                            </p>
                            <a href="#">
                                Learn more
                                <BsArrowRight style={{fontWeight:900}}/>
                            </a>
                        </div>
                        <div className="services--all__blocks--block">
                            <img src={block_img} alt=""/>
                            <h1>Crypto Platform</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut
                                ut felis congue nisl hendrerit commodo.
                            </p>
                            <a href="#">
                                Learn more
                                <BsArrowRight style={{fontWeight:900}}/>
                            </a>
                        </div>
                        <div className="services--all__blocks--block">
                            <img src={block_img} alt=""/>
                            <h1>Smart Trading Modules</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut
                                ut felis congue nisl hendrerit commodo.
                            </p>
                            <a href="#">
                                Learn more
                                <BsArrowRight style={{fontWeight:900}}/>
                            </a>
                        </div>
                        <div className="services--all__blocks--block">
                            <img src={block_img} alt=""/>
                            <h1>Analyzer of the News</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut
                                ut felis congue nisl hendrerit commodo.
                            </p>
                            <a href="#">
                                Learn more
                                <BsArrowRight style={{fontWeight:900}}/>
                            </a>
                        </div>
                        <div className="services--all__blocks--block">
                            <img src={block_img} alt=""/>
                            <h1>Module of Price Notification</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut
                                ut felis congue nisl hendrerit commodo.
                            </p>
                            <a href="#">
                                Learn more
                                <BsArrowRight style={{fontWeight:900}}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="services--bg">
                    <div className="services--bg__top">
                        <div className="services--bg__top--one"></div>
                        <div className="services--bg__top--two"></div>
                        <div className="services--bg__top--three"></div>
                    </div>
                    <div className="services--bg__bottom">
                        <div className="services--bg__bottom--left">
                            <div className="services--bg__bottom--left__one"></div>
                            <div className="services--bg__bottom--left__two"></div>
                        </div>
                        <div className="services--bg__bottom--right"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
