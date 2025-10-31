import React from "react";
import { experience } from "../data/resume";

function gatherProjects(){
  // flatten listed projects from experience
  const fromExp = [];
  experience.forEach(exp=>{
    if(exp.projects) {
      exp.projects.forEach(p=>{
        fromExp.push({
          title: p.title,
          description: p.points.join(" · "),
          company: exp.company
        });
      });
    }
  });
  return fromExp;
}

export default function Projects(){
  const projects = gatherProjects();
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <h3>Projects & Highlights</h3>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-head">
                <h4>{p.title}</h4>
                <small>{p.company}</small>
              </div>
              <p className="muted">{p.description}</p>
              <div className="project-actions">
                <a className="btn small" href="#">View case</a>
                <a className="btn ghost small" href="#">Source</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
