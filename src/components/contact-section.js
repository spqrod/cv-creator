import React, { Component } from "react";

class ContactSection extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h2>Contact</h2>
                <div className="contactItem">
                    <img></img>
                    <a>Address</a>
                </div>
                <div className="contactItem">
                    <img></img>
                    <a>Phone</a>
                </div>
                <div className="contactItem">
                    <img></img>
                    <a>Web</a>
                </div>
                <div className="socialIcons">
                    <a><img></img></a>
                    <a><img></img></a>
                    <a><img></img></a>
                </div>
            </div>
        );
    }
}

export default ContactSection;