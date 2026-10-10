import { ArrowUpRight } from "lucide-react";
const links = [
  { label: "Work", href: "#projects" },
  { label: "Design + code", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];
export default function Navbar() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top">
        ASIF<span>.</span>
      </a>
      <nav>
        {links.map((x) => (
          <a key={x.href} href={x.href}>
            {x.label}
          </a>
        ))}
        <a className="nav-contact" href="#contact">
          Let’s talk <ArrowUpRight size={14} />
        </a>
      </nav>
    </header>
  );
}
