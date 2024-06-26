import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import Education from "./education/education";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";
import Profile from "./profile/Profile";
import Certifications from "./certifications/Certifications";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        <Education />
        <WorkExperience />
        <Projects />
        <Certifications />
        <Profile />
        <Footer />
        <Top />
      </div>
    );
  }
}
