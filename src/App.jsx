import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Home />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Contact />
      </main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Asif Shaikh</span>
        <div>
          <a href="https://github.com/Asifcseng" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/asif-shaikh-41263718a/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
