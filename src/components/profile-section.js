import React, { Component } from "react";
import { handleElementClick, handleElementChange, handleElementKeyDown, hideElement } from "../text-input-swap-script";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: this.props.profile
        }
    }
    componentDidMount() {
        hideElement("profileInputField");
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
                <h2>Profile</h2>
                <p id="profileTextField" onClick={(e) => handleElementClick(e)}>{this.state.profile}</p>
                <textarea id="profileInputField" onBlur={(e) => this.updateStateAfterElementChange(e)} onKeyUp={e => handleElementKeyDown(e)} defaultValue={this.state.profile} />
            </div>
        );
    }
}

export default Profile;