const groups = [
  { title: "UX / UI design", label: "DESIGN", items: ["User flows", "Wireframes", "Interface design", "Prototyping", "Design systems", "Accessibility"] },
  { title: "Frontend development", label: "BUILD", items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML & CSS"] },
  { title: "APIs & tools", label: "SUPPORT", items: ["REST APIs", "FastAPI", "MongoDB", "PostgreSQL", "Git & GitHub", "Vite / Webpack"] },
];
const steps = ["Understand", "Structure", "Design", "Develop"];
export default function Skills() {
  return (
    <section className="section wrap" id="skills">
      <div className="skills-heading">
        <div><span className="eyebrow">02 / DESIGN + CODE</span><h2>From first question<br />to finished interface.</h2></div>
        <p>My process connects user needs, visual decisions, and the code that brings an experience to life.</p>
      </div>
      <div className="process-rail" aria-label="Design and development process">
        {steps.map((step, index) => <div className="process-stop" key={step}><span>0{index + 1}</span><b>{step}</b></div>)}
      </div>
      <div className="toolkit-heading"><span>THE TOOLKIT</span><span>DESIGN × DEVELOPMENT</span></div>
      <div className="toolkit-grid">
        {groups.map((group, index) => <article className={`toolkit-card toolkit-card-${index + 1}`} key={group.title}>
          <div className="toolkit-top"><span>{group.label}</span><span>0{index + 1}</span></div>
          <h3>{group.title}</h3>
          <div className="toolkit-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
        </article>)}
      </div>
    </section>
  );
}
