import React from "react";
import { skills } from "../data/resume";

export default function Skills(){
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h3>Skills</h3>
        <ul className="skills-grid">
          {skills.map(s => <li key={s} className="skill">{s}</li>)}
        </ul>
      </div>
    </section>
  );
}
