import { ArrowUpRight } from "lucide-react";

const projects = [
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
        <div><span className="eyebrow">01 / SELECTED WORK</span><h2>Projects with a point of view.</h2></div>
        <p>Product ideas shaped into clear interfaces and useful web experiences.</p>
      </div>
      <a className="featured-project" href="https://nexoflow-five.vercel.app/" target="_blank" rel="noreferrer">
        <div className="featured-copy">
          <div className="featured-label"><span>FEATURED PROJECT</span><span>01 / 06</span></div>
          <h3>NexaFlow<br />Dashboard</h3>
          <p>A modern client and project management dashboard designed to bring active work into one clear view.</p>
          <span className="featured-link">Explore project <ArrowUpRight size={17} /></span>
        </div>
        <div className="featured-facts">
          <div><span>PROJECT TYPE</span><b>Dashboard</b></div>
          <div><span>BUILT WITH</span><b>React · Redux</b></div>
          <span className="featured-index">01</span>
        </div>
      </a>
      <div className="project-list-heading"><span>MORE PROJECTS</span><span>05 PROJECTS</span></div>
      <div className="project-list">
        {projects.map((project, index) => (
          <a className="project-row" href={project.link} target="_blank" rel="noreferrer" key={project.title}>
            <span className="project-index">{String(index + 2).padStart(2, "0")}</span>
            <div className="project-copy"><h3>{project.title}</h3><p>{project.description}</p></div>
            <span className="project-tech">{project.detail}</span>
            <span className="project-open" aria-label={`Open ${project.title}`}><ArrowUpRight size={18} /></span>
          </a>
        ))}
      </div>
    </section>
  );
}
