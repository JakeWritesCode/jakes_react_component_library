// A fairly basic navbar designed for a scrolling landing page
// No support for dropdowns

// Buttons should be an array of dicts
// [{"buttonText": "Hello there,
//   "link": "#Hello"}]

// Anchors should be points on the page, obviously.

import React from 'react';
import PropTypes from 'prop-types';
import "./navbar1.scss"

export default function Navbar1(props) {
    return (
        <header id="nav-wrapper">
            <nav id="nav">
                <div className="nav left">
                    <span className="gradient skew">
                        <h1 className="logo un-skew">
                            <a href="#">Logo Here</a>
                        </h1>
                    </span>
                    <button id="menu" className="btn-nav">
                        <span className="fas fa-bars"/>
                    </button>
                </div>
                <div className="nav right">
                    <a href="#home" className="nav-link active">
                        <span className="nav-link-span">
                            <span className="u-nav">Home</span>
                        </span>
                    </a>
                </div>
            </nav>
        </header>
    )
}

Navbar1.propTypes = {
    buttons: PropTypes.array,
    homeLink: PropTypes.string,
    fixed: PropTypes,.
}
