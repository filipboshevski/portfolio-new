import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import aboutmeimg from '../../../assets/aboutme.svg';
import {ReactComponent as Github} from '../../../assets/github.svg';

import './Aboutme.scss';

const Aboutme = () => {
    useEffect(() => {
        document.title = 'About Me | Full-Stack Developer';
    }, []);

    return (
        <div className='aboutme'>
            <div className='heading-primary aboutme__heading'>
                <div className='heading-primary__tags'>
                    <span className='heading-primary__tag'>html</span>
                    <span className='heading-primary__tag' style={{marginTop: '-10px'}}>body</span>
                </div>
                <div className='aboutme__content'>
                    <div className='heading-primary__body aboutme__heading-body'>
                        <span className='heading-primary__tag'>h1</span>
                        <h1 className='aboutme__heading-primary'>About me <span className='heading-primary__tag aboutme__tag'>/ h1</span></h1>
                        <p className='aboutme__paragraph'>Im a Full-stack developer and UI / UX designer with a great passion for building things with code.</p>
                        <p className='aboutme__paragraph'>The main area of my expertise is in web technologies. My main stack of technologies is the MERN stack (MongoDB, Express, React and Node). For back end development I mainly use Node Js and sometimes Python (Flask & Django), but i haven't really mastered it well.</p>
                        <p className='aboutme__paragraph'> I specialize in Java and JavaScript. I'm currently working on learning mobile app development with React Native, as well as cloud services such as Google Cloud Platform and AWS.</p>
                        <div className='custom-heading__buttons aboutme__buttons'>
                            <Link className='custom-button custom-button-fill custom-heading__button aboutme__button aboutme__button-1' to='/mywork'>View Projects</Link>
                            <a href='https://github.com/filipboshevski?tab=repositories' target='_blank' rel="noopener noreferrer" className='custom-button custom-heading__button aboutme__button myproject__button-github aboutme__button-2' ><Github className='myproject__button-icon' />ALL PROJECTS</a>
                        </div>
                    </div>
                </div>
                <div className='heading-primary__closing-tags' style={{marginTop: '3rem'}}>
                        <span className='heading-primary__tag heading-primary__tag-close'>/ body</span>
                        <span className='heading-primary__tag heading-primary__tag-close'>/ html</span>
                </div>
            </div>
            <img src={aboutmeimg} alt='aboutme' className='aboutme__img' />
        </div>
    );
}

export default Aboutme;