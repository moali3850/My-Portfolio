import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionTitle
        title="Featured Projects"
        text="A collection of projects I've built with passion, creativity, and a love for clean code 🚀"
      />
      <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal as="li" key={p.title} delay={i * 130}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
