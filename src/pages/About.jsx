import { ArrowUpRight } from "lucide-react";
export default function About() {
  return (
    <section className="section wrap" id="about">
      <div className="about-layout">
        <div className="about-photo">
          <img src="/my-pic.jpg" alt="Asif Shaikh" />
          <span className="photo-caption">
            ASIF SHAIKH · DESIGN + DEVELOPMENT
          </span>
        </div>
        <div className="about-copy">
          <span className="eyebrow">04 / A LITTLE ABOUT ME</span>
          <h2>
            Thoughtful by design.
            <br />
            Practical by nature.
          </h2>
          <p>
            I’m Asif, a frontend developer with a growing focus on UI/UX. I like
            turning ideas into clear, approachable experiences—from the first
            sketch to the details that make an interface feel finished.
          </p>
          <p>
            My work brings together curiosity about how people use products and
            the hands-on craft of building for the web.
          </p>
          <div className="about-links">
            <a
              href="https://www.behance.net/asifshaikh153"
              target="_blank"
              rel="noreferrer"
            >
              Behance <ArrowUpRight size={14} />
            </a>

            <a
              href="https://www.linkedin.com/in/asif-shaikh-41263718a/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight size={14} />
            </a>
            <a
              href="https://github.com/Asifcseng"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
