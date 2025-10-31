import { meta, summary } from "../data/resume";
import photo from '../assets/photo.jpeg'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <h1>Hello — I'm {meta.name}.</h1>
          <p className="lead">{summary}</p>
          <div className="cta">
            <a className="btn" href="#projects">See Projects</a>
            <a className="btn ghost" href={`mailto:${meta.email}`}>Hire me</a>
          </div>
        </div>
        <div className="hero-card">
          <img src={photo} alt="Profile" className="avatar-placeholder" />
          <div className="quick-info">
            <p><strong>Location:</strong> {meta.location}</p>
            <p><strong>Phone:</strong> {meta.phone}</p>
            <p><strong>Email:</strong> <a href={`mailto:${meta.email}`}>{meta.email}</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
