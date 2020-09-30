import React from 'react';
import './CustomButton.scss';

const CustomButton = (props) => {
    return (
        <p {...props}>{props.children}</p>
    )
};

export const CustomButtonLink = (props) => {
    return (
        <a {...props}>{props.children}</a>
    )
}

export default CustomButton;