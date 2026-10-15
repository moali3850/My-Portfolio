import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Hero from "./sections/Hero";
import WhatIDo from "./sections/WhatIDo";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Process from "./sections/Process";
import Exploring from "./sections/Exploring";
import WhyMe from "./sections/WhyMe";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <About />
        <Skills />
        <Projects />
        <Process />
        <Exploring />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
