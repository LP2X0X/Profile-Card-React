import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  { skillName: "C#", skillLevel: "advanced", bgColor: "#9b95bf" },
  { skillName: "C++", skillLevel: "beginner", bgColor: "darkGreen" },
  { skillName: "HTML+CSS", skillLevel: "intermediate", bgColor: "gray" },
  { skillName: "Git", skillLevel: "advanced", bgColor: "brown" },
  { skillName: "JavaScript", skillLevel: "beginner", bgColor: "darkRed" },
  { skillName: "Rust", skillLevel: "beginner", bgColor: "lightBlue" },
  { skillName: "React", skillLevel: "beginner", bgColor: "green" },
  { skillName: ".NET", skillLevel: "advanced", bgColor: "lightGreen" },
];

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

function Skill({ bgColor, skillName, level }) {
  return (
    <div className="skill" style={{ backgroundColor: bgColor }}>
      <span style={{ marginRight: "0.1875rem" }}>{skillName}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
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
          {skills.map((skill) => {
            return (
              <Skill
                skillName={skill.skillName}
                level={skill.skillLevel}
                bgColor={skill.bgColor}
              />
            );
          })}
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
