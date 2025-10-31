import React from "react";
import { education, awards } from "../data/resume";

export default function Education(){
  return (
    <section className="section">
      <div className="container">
        <h3>Education & Awards</h3>
        <div className="edu-grid">
          {education.map((e,i)=>(
            <div key={i} className="edu-card">
              <strong>{e.title}</strong>
              <div>{e.date}</div>
              <div className="muted">{e.notes}</div>
            </div>
          ))}
        </div>
        <div className="awards">
          <h4>Awards & Certificates</h4>
          <ul>
            {awards.map((a,i)=><li key={i}>{a}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
