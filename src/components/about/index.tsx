import React from 'react';
import image from '../../assets/img/about-img.svg';
import image_two from '../../assets/img/about-two.svg';
const About = () => {
    return (
        <section id='about'>
            <div className="about container">
                <div className="about--all">
                    <img src={image} alt=""/>
                    <div className="about--all__txt">
                        <h1>We complete every projects
                            extra care as customer need</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit
                            arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe scelerisque in. orem ipsum
                            dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus
                            reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit laborum iure inventore
                            possimus laboriosam qui nam.
                        </p>
                        <button>
                            Read more
                        </button>
                    </div>
                </div>
                <div className="about--bg"></div>
            </div>
            <div className="about-two container">
                <div className="about-two--all">
                    <div className="about--all__txt">
                        <h1>We complete every projects
                            extra care as customer need</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit
                            arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe scelerisque in. orem ipsum
                            dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus
                            reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit laborum iure inventore
                            possimus laboriosam qui nam.
                        </p>
                        <button>
                            Read more
                        </button>
                    </div>
                    <img src={image_two} alt=""/>

                </div>
                <div className="about-two--bg"></div>
            </div>
        </section>
    );
};

export default About;
