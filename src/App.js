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
      position: "General Director",
      profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      phone: "+54 000 00 00",
      address: "Olivos, Buenos Aires Provincia, Argentina",
      web: "spqrod.dev",
      email: "dev@google.com",
    }
  }
  render() {
    const { name, position, profile, address, phone, web, email } = this.state;
    return (
    <div>
      <h1>Create your CV</h1>
      <Name name = {name} position = {position}/>
      <Photo />
      <ProfileSection profile = {profile}/>
      <ContactSection address = {address} phone = {phone} web = {web} email = {email}/>
      <EducationSection />
      <ExperienceSection />
    </div>
)}}

export default App;
