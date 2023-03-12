import React, { Component } from "react";
import EducationItem from "./education-item";

class EducationSection extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h2>Education</h2>
                <EducationItem />
            </div>
        );
    }
}

export default EducationSection;