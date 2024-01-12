import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ac from '../../assets/ac.jpeg';

const Header = () => {
    return (
        <div className="duca4__header section__padding" id="home">
            <div className="duca4__header-content">
                <h1 className="gradient__text">Ready to build something exceptional with DUCA-4 Content Creator.</h1>
                <p>Experience boundless creativity with DUCA-4, redefining content creation for unparalleled brilliance. Unleash your ideas with cutting-edge AI technology. Elevate projects like Research Paper Summaries, Thesis and Dissertation Assistance, Article and Blog Post Writing, Creative Writing and Storytelling, Technical Documentation, Study Guides and Exam Prep Materials, Curriculum Development Support, Language Translation Services, Code Documentation and Explanations, Data Analysis and Visualization Reports effortlessly, as DUCA-4 intuitively transforms concepts into captivating content, setting new standards in innovation. ✨</p>

                <div className="duca4__header-content__input">
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button">Get Started</button>
                </div>

                <div className="duca4__header-content_">
                    <img src={people} alt="people" />
                    <p>Over 1.6k People Requested access to visit in last 24 hours</p>
                </div> 

            </div>
                <div className="duca4__header-image">
                    <img src={ac} alt="ac"/>
                </div>
        </div>
    )
}

export default Header;