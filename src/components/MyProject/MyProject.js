import React from 'react';

import { CustomButtonLink } from '../custom-button/CustomButton';
import {ReactComponent as Github} from '../../assets/github.svg';
import {ReactComponent as Chain} from '../../assets/chain.svg';

import './MyProject.scss';

const MyProject = ({project, img}) => {
    const { name, description, tools, urls } = project;
    return (
        <div className='myproject'>
            <h1 className='myproject__heading'>{name}</h1>
            <div className='myproject__content'>
                <img alt='projectimage' src={img} className='myproject__img'/>
                <div className='myproject__description'>
                    <p className='myproject__description-main'>{description}</p>
                    <p className='myproject__description-tech'>{tools}</p>
                    <div className='myproject__buttons'>
                        <CustomButtonLink href={urls[0]} target='_blank' className='custom-button custom-button-fill myproject__button myproject__button-chain'><Chain className='myproject__button-icon' />PREVIEW</CustomButtonLink>
                        <CustomButtonLink href={urls[1]} target='_blank' className='custom-button myproject__button myproject__button-github'><Github className='myproject__button-icon' />SOURCE</CustomButtonLink>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MyProject;