import { meta } from "../data/resume";

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <div> Made With ❤️ © {new Date().getFullYear()} {meta.name}</div>
        {/* <div className="muted">Built with React • Resume source included. :contentReference[oaicite:2]{index=2}</div> */}
      </div>
    </footer>
  );
}
