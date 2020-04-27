import React from "react";
import "./SoftwareSkill.css";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skill, index) => {
            return (
              <li
                key={index}
                className="software-skill-inline"
                name={skill.skillName}
              >
                <i className={skill.fontAwesomeClassname}></i>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
