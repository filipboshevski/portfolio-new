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
                        <p className='aboutme__paragraph'>
                            I'm a Full Stack Developer and UI / UX designer with a great passion for building things with code.
                        </p>
                        <p className='aboutme__paragraph'>
                            In the last 3 years, I've been all over the place with studying every field that i've lost track. I'm currently an expert in .NET (C#) and also JavaScript for front end.
                            I started my programming career in Java, but I've moved to a lot of places since then. I'm currently learning Data Science and Machine Learning for my upcoming project in Pythonß.
                        </p>
                        <p className='aboutme__paragraph'> Most of the projects here are done in either React or Angular, and only few of them are fully built with a backend architecture. I've got plenty of projects lying around which I've yet to upload to my repository, although I'm set on one particular project that i believe will outdo the others.</p>
                        <p className='aboutme__paragraph'> I've studied a lot, but it's still not enough if I want to combine all of it in the project I'm working on. If you wish to check out my available projects, click the link below.</p>
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