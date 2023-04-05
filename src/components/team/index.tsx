import React from 'react';
import team_one from '../../assets/img/team-img-one.svg'
import team_two from '../../assets/img/team-img-two.svg'
import team_three from '../../assets/img/team-img-three.svg'
import team_four from '../../assets/img/team-img-four.svg'
import skype from '../../assets/img/skype.svg'
import linkedin from '../../assets/img/linkedin 1.svg'
import twitter from '../../assets/img/twitter.svg'
import facebook from '../../assets/img/facebook.svg'
const Team = () => {
    return (
        <section id='team'>
            <div className="team container">
                <div className="team--all">
                    <div className="team--all__title">
                        <h1>Met Our Team</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                            accumsan nisi Ut ut felis congue nisl hendrerit commodo.
                        </p>
                    </div>
                    <div className="team--all__blocks">
                        <div className="team--all__blocks--block">
                            <img src={team_one} alt=""/>
                            <h1>Sunny Khan</h1>
                            <h2>Executive officer</h2>
                            <div className="team--all__blocks--block__icons">
                                <img src={skype} alt=""/>
                                <img src={linkedin} alt=""/>
                                <img src={twitter} alt=""/>
                                <img src={facebook} alt=""/>
                            </div>
                        </div>
                        <div className="team--all__blocks--block">
                            <img src={team_two} alt=""/>
                            <h1>Alina Jesia</h1>
                            <h2>UX/UI DESIGNER</h2>
                            <div className="team--all__blocks--block__icons">
                                <img src={skype} alt=""/>
                                <img src={linkedin} alt=""/>
                                <img src={twitter} alt=""/>
                                <img src={facebook} alt=""/>
                            </div>
                        </div>
                        <div className="team--all__blocks--block">
                            <img src={team_three} alt=""/>
                            <h1>Alex Sohag</h1>
                            <h2>BUSINESS DEVELOPMENT</h2>
                            <div className="team--all__blocks--block__icons">
                                <img src={skype} alt=""/>
                                <img src={linkedin} alt=""/>
                                <img src={twitter} alt=""/>
                                <img src={facebook} alt=""/>
                            </div>
                        </div>
                        <div className="team--all__blocks--block">
                            <img src={team_four} alt=""/>
                            <h1>Afroza Mou</h1>
                            <h2>Head of marketing</h2>
                            <div className="team--all__blocks--block__icons">
                                <img src={skype} alt=""/>
                                <img src={linkedin} alt=""/>
                                <img src={twitter} alt=""/>
                                <img src={facebook} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team--bg">
                    <div className="team--bg__one"></div>
                    <div className="team--bg__two"></div>
                </div>
            </div>
        </section>
    );
};

export default Team;
