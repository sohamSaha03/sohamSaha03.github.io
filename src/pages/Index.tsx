
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ProjectDetails from "../components/ProjectDetails";
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ProjectDetails />
      <Contact />
    </div>
  );
};

export default Index;
