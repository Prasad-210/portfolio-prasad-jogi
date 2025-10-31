import React from "react";
import { experience } from "../data/resume";

export default function Experience(){
  return (
    <section id="experience" className="section">
      <div className="container">
        <h3>Experience</h3>
        {experience.map((exp, idx) => (
          <article key={idx} className="exp-card">
            <div className="exp-head">
              <h4>{exp.role} — <span className="company">{exp.company}</span></h4>
              <small>{exp.period}</small>
            </div>
            <ul>
              {exp.bullets.map((b,i) => <li key={i}>{b}</li>)}
            </ul>

            {exp.projects && (
              <div className="project-list">
                <strong>Projects:</strong>
                {exp.projects.map((p,pi)=>(
                  <div className="mini-project" key={pi}>
                    <em>{p.title}</em>
                    <ul>
                      {p.points.map((pt,pti) => <li key={pti}>{pt}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
