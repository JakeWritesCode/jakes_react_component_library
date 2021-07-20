// Standard button

import React from 'react';
import PropTypes from 'prop-types';
import "./simpleButton1.scss"

export default function SimpleButton1(props) {
    let btnClassName = "SimpleButton1 bg-" + props.buttonColour
    if (props.rounded === true) {
        btnClassName += " rounded"
    }
    return (
        <button className={btnClassName}>
            {props.text}
        </button>
    )
}

SimpleButton1.propTypes = {
    buttonColour: PropTypes.string,
    text: PropTypes.string,
    rounded: PropTypes.bool
}
