import { ArrowUpRight } from "lucide-react";

const projects = [
  { title: "NexaFlow Dashboard", description: "A modern client and project management dashboard.", detail: "React · Redux", category: "Dashboard", link: "https://nexoflow-five.vercel.app/" },
  { title: "Shoe Store Website", description: "A streamlined shopping experience for browsing footwear and managing a cart.", detail: "React · Redux", category: "Commerce", link: "https://assignment-5-g6jqb6gyv-asif-shaikhs-projects-31572702.vercel.app/" },
  { title: "Currency Converter", description: "A quick, focused conversion tool with a clear path from amount to result.", detail: "React · Next", category: "Utility", link: "https://currency-converter-ivory-pi.vercel.app/" },
  { title: "Weather Dashboard", description: "A weather app that brings current conditions into an easy-to-scan view.", detail: "React · API", category: "Weather", link: "https://weather-application-pi-two.vercel.app/" },
  { title: "Finance Tracker", description: "A personal finance interface for keeping spending and activity organized.", detail: "React · Context API", category: "Finance", link: "https://finance-tracker-phi-ten.vercel.app/" },
  { title: "Food Fusion", description: "A food discovery and cart experience built for browsing and ordering.", detail: "React · Tailwind CSS", category: "Food & dining", link: "https://assignment-8-seven-xi.vercel.app/" },
];

export default function Projects() {
  return (
    <section className="section wrap" id="projects">
      <div className="section-heading">
        <div>
          <span className="eyebrow">01 / SELECTED WORK</span>
          <h2>A few things I’ve made.</h2>
        </div>
        <p>Digital experiences shaped by clear thinking, useful details, and a little care.</p>
      </div>
      <div className="project-grid project-cards">
        {projects.map((project, index) => (
          <a className="project-card text-project-card" href={project.link} target="_blank" rel="noreferrer" key={project.title}>
            <div className="project-card-top">
              <span className="project-num">{String(index + 1).padStart(2, "0")}</span>
              <span className="project-category">{project.category}</span>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="project-card-bottom">
              <span className="project-tech">{project.detail}</span>
              <ArrowUpRight className="project-arrow" size={18} aria-hidden="true" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
