import React, { Component } from "react";
import EducationItemComponent from "./education-item-component";
import uniqid from "uniqid";

class EducationSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            educationItem: {},
            educationItems: this.props.educationItems
        };
    }
    handleButtonClick() {
        this.setState({
            educationItem: {
                degree: "Add Degree",
                university: "Add University",
                years: "Add years",
            },
            educationItems: this.state.educationItems.concat(this.state.educationItem)
        });
    }

    render() {
        return (
            <div>
                <h2>Education</h2>
                {this.state.educationItems.map(item => {
                    return <EducationItemComponent key = {uniqid()} educationItem = {item} />
                })}
                <button type = "button" onClick = {() => this.handleButtonClick()}>Add Education</button>
            </div>
        );
    }
}

export default EducationSection;