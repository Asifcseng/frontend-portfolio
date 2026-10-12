import { ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <section className="hero wrap" id="home">
      <div className="hero-top">
        <span className="eyebrow">
          <i /> PORTFOLIO · 2026
        </span>
        <span className="hero-location">
          Based in India · Available for opportunities
        </span>
      </div>
      <div className="hero-content">
        <div className="hero-main">
          <h1>
            UI/UX Designer <span>&amp;</span>
            <br />
            Frontend Developer
          </h1>
          <div className="hero-bottom">
            <p>
              I design thoughtful interfaces and build them into polished,
              accessible web experiences.
            </p>
          </div>
        </div>
        {/* <div className="hero-graphic" aria-hidden="true">
          <div className="graphic-grid" />
          <div className="graphic-orbit" />
          <div className="graphic-disc" />
          <span className="graphic-mark">A</span>
          <span className="graphic-code">AS / 26</span>
          <span className="graphic-caption">DESIGN × DEVELOPMENT</span>
        </div> */}
      </div>
      <div className="hero-index">
        <span>DESIGN THINKING</span>
        <span className="index-line" />
        <span>BUILT FOR THE WEB</span>
      </div>
    </section>
  );
}
