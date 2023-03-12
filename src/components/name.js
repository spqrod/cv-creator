import { type } from "@testing-library/user-event/dist/type";
import React, { Component } from "react";
import { handleElementClick, handleElementChange, handleElementKeyDown, hideElement } from "../text-input-swap-script";


class Name extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            position: this.props.position,
        }

    }

    componentDidMount() {
        hideElement("nameInputField");
        hideElement("positionInputField");
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
                <h1 id="nameTextField" onClick={(e) => handleElementClick(e)}>{this.state.name}</h1>
                <input id="nameInputField" onBlur={(e) => this.updateStateAfterElementChange(e)} onKeyUp={e => handleElementKeyDown(e)} defaultValue={this.state.name} />
                <h3 id="positionTextField" onClick={(e) => handleElementClick(e)}>{this.state.position}</h3>
                <input id="positionInputField" onBlur={(e) => this.updateStateAfterElementChange(e)} onKeyUp={e => handleElementKeyDown(e)} defaultValue={this.state.position} />
            </div>
        );
    }
}

export default Name;