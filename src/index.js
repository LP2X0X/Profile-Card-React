import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Avatar(props) {
  return <img className="avatar" alt="avatar" src="resources/IMG_3306.PNG" />;
}

function Name() {
  return <h1 className="name">Long Pham</h1>;
}

function About() {
  return (
    <p className="about">
      I’m a C# .NET and C++ developer currently expanding my skills into web
      development. I have a passion for coding and enjoy exploring programming
      concepts. In my free time, I like to read, play games, or simply relax
      with a good beverage.
    </p>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.bgColor }}>
      <span style={{ marginRight: "0.1875rem" }}>{props.skillName}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Avatar />
      <section className="information">
        <Name />
        <About />
        <section className="skills">
          <Skill skillName="C#" emoji="💪" bgColor="#9b95bf" />
          <Skill skillName="C++" emoji="💪" bgColor="darkGreen" />
          <Skill skillName="HTML+CSS" emoji="💪" bgColor="gray" />
          <Skill skillName="Git" emoji="💪" bgColor="brown" />

          <Skill skillName="JavaScript" emoji="💪" bgColor="darkRed" />
          <Skill skillName="Rust" emoji="💪" bgColor="lightBlue" />
          <Skill skillName="React" emoji="💪" bgColor="green" />
          <Skill skillName=".NET" emoji="💪" bgColor="lightGreen" />
        </section>
      </section>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
