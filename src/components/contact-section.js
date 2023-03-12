import React, { Component } from "react";
import { handleElementClick, handleElementChange, handleElementKeyDown, hideElement } from "../text-input-swap-script";

class ContactSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: this.props.address,
            phone: this.props.phone,
            web: this.props.web,
            email: this.props.email,
        }
    }
    componentDidMount() {
        hideElement("addressInputField");
        hideElement("phoneInputField");
        hideElement("webInputField");
        hideElement("emailInputField");
    }
    updateStateAfterElementChange(e) { 
        const { key, value } = handleElementChange(e);
        this.setState({
            [key]: value
        });
    }
    render() {
        return (
            <div>
                <h2>Contact</h2>
                <div className="contactItem">
                    <img></img>
                    <p id="addressTextField" onClick={(e) => handleElementClick(e)}>{this.state.address}</p>
                    <input id="addressInputField" onBlur={(e) => this.updateStateAfterElementChange(e)} onKeyUp={e => handleElementKeyDown(e)} defaultValue={this.state.address} />
                </div>
                <div className="contactItem">
                    <img></img>
                    <p id="phoneTextField" onClick={(e) => handleElementClick(e)}>{this.state.phone}</p>
                    <input id="phoneInputField" onBlur={(e) => this.updateStateAfterElementChange(e)} onKeyUp={e => handleElementKeyDown(e)} defaultValue={this.state.phone} />
                </div>
                <div className="contactItem">
                    <img></img>
                    <p id="webTextField" onClick={(e) => handleElementClick(e)}>{this.state.web}</p>
                    <input id="webInputField" onBlur={(e) => this.updateStateAfterElementChange(e)} onKeyUp={e => handleElementKeyDown(e)} defaultValue={this.state.web} />
                </div>
                <div className="contactItem">
                    <img></img>
                    <p id="emailTextField" onClick={(e) => handleElementClick(e)}>{this.state.email}</p>
                    <input id="emailInputField" onBlur={(e) => this.updateStateAfterElementChange(e)} onKeyUp={e => handleElementKeyDown(e)} defaultValue={this.state.email} />
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