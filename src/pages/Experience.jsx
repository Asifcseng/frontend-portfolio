const capabilities = [
  { label: "01 / DESIGN PRACTICE", title: "Shape the experience", copy: "Clarify the user journey, organize information, and turn early ideas into considered interface directions.", tags: ["UX flows", "Wireframes", "UI systems"] },
  { label: "02 / FRONTEND PRACTICE", title: "Bring it to life", copy: "Build responsive interfaces with attention to component structure, interaction details, and accessibility.", tags: ["React", "Responsive UI", "Accessible patterns"] },
];
export default function Experience() {
  return (
    <section className="section wrap" id="experience">
      <div className="experience-heading"><div><span className="eyebrow">03 / EXPERIENCE</span><h2>Two disciplines.<br />One thoughtful process.</h2></div><p>Hands-on project work across the full interface lifecycle—from clarifying a need to implementing a polished, responsive experience.</p></div>
      <div className="capability-grid">{capabilities.map((item, index) => <article className="capability" key={item.label}>
        <div className="capability-top"><span>{item.label}</span><span className="capability-symbol">{index === 0 ? "◌" : "⌘"}</span></div>
        <h3>{item.title}</h3><p>{item.copy}</p>
        <div className="capability-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      </article>)}</div>
    </section>
  );
}
