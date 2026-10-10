import { ArrowDown, ArrowUpRight } from "lucide-react";
export default function Home() {
  return (
    <section className="hero wrap" id="home">
      <div className="hero-top">
        <span className="eyebrow">
          <i /> PORTFOLIO · 2025
        </span>
        <span className="hero-location">
          Based in India · Available for opportunities
        </span>
      </div>
      <div className="hero-content">
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
          <a
            className="round-link"
            href="#projects"
            aria-label="Explore selected work"
          >
            <ArrowDown size={18} />
          </a>
        </div>
      </div>
      <div className="hero-index">
        <span>DESIGN THINKING</span>
        <span className="index-line" />
        <span>BUILT FOR THE WEB</span>
      </div>
    </section>
  );
}
