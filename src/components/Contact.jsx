import React from "react";
import { meta } from "../data/resume";

export default function Contact(){
  return (
    <section id="contact" className="section section-contact">
      <div className="container">
        <h3>Contact</h3>
        <p>Feel free to reach out — I usually respond quickly.</p>
        <div className="contact-grid">
          <div className="card">
            <h4>Email</h4>
            <a href={`mailto:${meta.email}`}>{meta.email}</a>
          </div>
          <div className="card">
            <h4>Phone</h4>
            <a href={`tel:${meta.phone}`}>{meta.phone}</a>
          </div>
          <div className="card">
            <h4>Location</h4>
            <div>{meta.location}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
