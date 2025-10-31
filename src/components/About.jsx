import React from "react";
import { summary } from "../data/resume";

export default function About(){
  return (
    <section id="about" className="section">
      <div className="container">
        <h3>About</h3>
        <p>{summary}</p>
        <p>
          I'm passionate about building scalable, user-friendly frontends with React. I enjoy converting complex
          data into intuitive dashboards and enhancing developer experience via reusable components and testing.
        </p>
      </div>
    </section>
  );
}
