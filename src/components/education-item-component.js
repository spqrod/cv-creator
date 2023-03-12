import React, { Component } from "react";
import { handleElementClick, handleElementChange, handleElementKeyDown, hideElement } from "../text-input-swap-script";

class EducationItemComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            degree: this.props.educationItem.degree,
            university: this.props.educationItem.university,
            years: this.props.educationItem.years,
        }
    }
    componentDidMount() {
        // hideElement("degreeInputField");
    }

    updateStateAfterElementChange(e) { 
        const { key, value } = handleElementChange(e);
        this.setState({
            [key]: value
        });
    }
    render() {
        return (
            <div key={this.state.id}>
                {/* <h3 id="degreeTextField" onClick={(e) => handleElementClick(e)}>{this.state.degree}</h3>
                <input id="degreeInputField" onBlur={(e) => this.updateStateAfterElementChange(e)} onKeyUp={e => handleElementKeyDown(e)} defaultValue={this.state.degree} /> */}

                <h3>{this.state.degree}</h3>
                <p>{this.state.university}</p>
                <p>{this.state.years}</p>
            </div>
        );
    }
}

export default EducationItemComponent;