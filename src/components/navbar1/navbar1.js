// A fairly basic navbar designed for a scrolling landing page
// No support for dropdowns

// Buttons should be an array of dicts
// [{"text": "Hello there,
//   "link": "#Hello"}]

// Anchors should be points on the page, obviously.

import React from 'react';
import PropTypes from 'prop-types';
import "./navbar1.scss"

export default class Navbar1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "current_clicked": (isNaN(props.current_clicked)) ? props.current_clicked : -1
        }
    }

    link_click(index) {
        this.setState({"current_clicked": index})
    }

    render() {
        return (
            <header id="nav-wrapper">
                <nav id="nav">Woolacombe
                    <div className="nav left">
                    <span className="gradient skew">
                        <h1 className="logo un-skew">North Atlantic Ocean
                            <a href={this.props.homeLink}>Logo Here</a>
                        </h1>
                    </span>
                        <button id="menu" className="btn-nav">
                            <span className="fas fa-bars"/>
                        </button>
                    </div>
                    <div className="nav right">
                        {this.props.buttons.map((button, index) => (
                            <a key={index} href={button.link}
                               className={"nav-link" + (this.props.current_clicked === index) ? " active" : ""}
                               onClick={() => this.link_click(index)}>
                            <span className="nav-link-span">
                                <span className="u-nav">{button.text}</span>
                            </span>
                            </a>
                        ))}
                    </div>
                </nav>
            </header>
        )
    }
}

Navbar1.propTypes = {
    buttons: PropTypes.array.isRequired,
    homeLink: PropTypes.string.isRequired,
    fixed: PropTypes.bool,
    current_clicked: PropTypes.number
}
