import React from "react";
import styles from "./styles.css"; 
function App() {
  return (
    <>
      <div className="header">
        <h1 className="my-title">Samuel Virgil Pe</h1>
        <h5 className="my-degree">Bachelor of Science in Information Technology</h5>
      </div>
      <div className="content">
        <div className="personal-info">
          <p className="my-description"><b>Location:</b> Las Piñas, Philippines</p>
          <p className="my-description"><b>Email:</b> savipe5@gmail.com</p>
          <p className="my-description"><b>Phone:</b> +63 939 713 9965</p>
          <p className="my-description"><b>About Me:</b> A tech enthusiast for computer hardware and currently pursuing a career in app and web development.</p>
        </div>
        <br></br>
        <div className="skills">
          <h2 className="my-skills-title">Skills</h2>
          <div className="my-skills-list">
            <p className="my-description-skills" style={{ marginLeft: '-50px'}}>JavaScript</p>
            <p className="my-description-skills">React</p>
            <p className="my-description-skills">CSS</p>
            <p className="my-description-skills">HTML</p>
            <p className="my-description-skills">Java</p>
          </div>
          <div>
            <h3 className="my-projects-title">Projects</h3>
            <p className="my-description-projects">Charge: A web minigame based on the popular Charge game in Southeast Asia</p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
