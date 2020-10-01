import Axios from 'axios';
import React, { useState } from 'react';

import './Contact.scss';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [callback, setCallback] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();

        Axios.post('https://filipportfolio.cloudns.cl/email', {
            name,
            email,
            subject,
            message
        })
        .then(response => setCallback(response.data))
        .catch(err => setCallback(err));
    }

    return (
        <div className='contact'>
            <div className='heading-primary'>
                <div className='heading-primary__tags'>
                    <span className='heading-primary__tag'>body</span>
                    <span className='heading-primary__tag' style={{marginTop: '-10px'}}>h1</span>
                </div>
            </div>
            {
                callback ? <span style={{color: 'white', marginLeft: '6rem', fontSize: '3rem', fontWeight: '700'}} className='contact__paragraph contact__success'>{callback}</span> : (<div className='contact__content'>
                    <div className='heading-primary__body contact__heading-body'>
                    <h1 className='aboutme__heading-primary'>Contact me <span className='heading-primary__tag aboutme__tag'>/ h1</span></h1>
                    <p className='aboutme__paragraph contact__paragraph'>Please feel free to contact me using below form, for freelance opportunities or even if you have other requests or questions.</p>
                    <p className='aboutme__paragraph contact__paragraph'>You could also contact me via: <span style={{color: 'red'}}>@</span> filipboshevski.dev@gmail.com</p>
                    <div className='contact__form-div'>
                        <form onSubmit={handleSubmit} name='contact' className='contact__form'>
                            <div className='contact__form-1'>
                                <input type='name' value={name} onChange={e => setName(e.target.value)} className='contact__form-name' placeholder='Name' required/>
                                <input type='email' value={email} onChange={e => setEmail(e.target.value)} className='contact__form-email' placeholder='Email Address' required/>
                            </div>
                            <div className='contact__form-1'>
                                <input type='text' value={subject} onChange={e => setSubject(e.target.value)} className='contact__form-subject' placeholder='Subject' required/>
                            </div>
                            <div className='contact__form-1'>
                                <textarea value={message} onChange={e => setMessage(e.target.value)} className='contact__form-message' placeholder='Message' required/>
                            </div>
                            <button type='submit' className='custom-button custom-heading__button contact__form-button'>Send</button>
                        </form>
                    </div>
                    </div>
                <div className='heading-primary__closing-tags contact__closing'>
                    <span className='heading-primary__tag heading-primary__tag-close'>/ body</span>
                    <span className='heading-primary__tag heading-primary__tag-close'>/ html</span>
                </div>
                </div>)
            }
        </div>
    );
}

export default Contact;