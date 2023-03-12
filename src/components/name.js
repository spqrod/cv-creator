import { type } from "@testing-library/user-event/dist/type";
import React, { Component } from "react";

class Name extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            position: this.props.position,
        }

    }

    handleElementClick(e) {
        const elementID = e.target.id;
        this.hideElement(elementID);
        let newElementID = "";
        if (elementID.includes("TextField")) {
            newElementID = elementID.replace(/TextField/, "InputField");
        } else {
            newElementID = elementID.replace(/InputField/, "TextField");
        }
        this.revealElement(newElementID);
    }

    handleElementChange(e) {
        this.handleElementClick(e);
            let key = e.target.id;
            key = key.replace(/InputField/, "");
            key = key.replace(/TextField/, "");
            this.setState({
                [key]: e.target.value
            });
    }
    
    handleElementKeyDown(e) {
        if (e.key === "Enter") {
            e.target.blur();
        }
    }

    hideElement(elementID) {
        const element = document.getElementById(elementID);
        element.style.display = "none";
    }
    
    revealElement(elementID) {
        const element = document.getElementById(elementID);
        element.style.display = "block";
        if (element.tagName) {
            element.focus();
        }
    }

    componentDidMount() {
        this.hideElement("nameInputField");
        this.hideElement("positionInputField");
    }

    render() {

        return (
            <div>
                <h1 id="nameTextField" onClick={(e) => this.handleElementClick(e)}>{this.state.name}</h1>
                <input id="nameInputField" onBlur={(e) => this.handleElementChange(e)} onKeyUp={e => this.handleElementKeyDown(e)} defaultValue={this.state.name} />
                <h3 id="positionTextField" onClick={(e) => this.handleElementClick(e)}>{this.state.position}</h3>
                <input id="positionInputField" onBlur={(e) => this.handleElementChange(e)} onKeyUp={e => this.handleElementKeyDown(e)} defaultValue={this.state.position} />
            </div>
        );
    }
}

export default Name;