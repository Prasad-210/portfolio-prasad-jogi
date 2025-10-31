import React, { useContext } from "react";
import { meta } from "../data/resume";
import { FiMail, FiPhone, FiSun, FiMoon } from "react-icons/fi";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand">
         <h1 className="main-titles">{meta.name}</h1>
          <p className="role">🚀{meta.role}</p>
        </div>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <a
            className="btn small"
            href="/Prasad_Jogi_Resume.pdf"
            download="Prasad_Jogi_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>

          <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>

          <a href={`mailto:${meta.email}`}><FiMail /></a>
          <a href={`tel:${meta.phone}`}><FiPhone /></a>
        </div>
      </div>
    </header>
  );
}
