import React, { Component } from "react";
// import './App.css';
import ProfileSection from './components/profile-section.js';
import Name from './components/name.js';
import Photo from './components/photo.js';
import ContactSection from './components/contact-section.js';
import EducationSection from './components/education-section.js';
import ExperienceSection from './components/experience-section.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "Obi-Wan Kenobi",
      position: "General Director"
    }
  }
  render() {
    const { name, position } = this.state;
    return (
    <div>
      <h1>Create your CV</h1>
      <Name name={name} position={position}/>
      <Photo />
      <ProfileSection />
      <ContactSection />
      <EducationSection />
      <ExperienceSection />
    </div>
)}}

export default App;
