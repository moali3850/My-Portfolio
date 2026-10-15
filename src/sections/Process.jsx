import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Cards from "./Cards";

const steps = [
  {
    title: "Plan",
    text: "Understand the goals, the audience, and what needs to be built.",
  },
  {
    title: "Design",
    text: "Sketch layouts, pick a type scale and colors, and plan the components.",
  },
  {
    title: "Develop",
    text: "Build clean, responsive, accessible interfaces with React and Tailwind CSS.",
  },
  {
    title: "Test",
    text: "Check every screen size, browser, and keyboard path.",
  },
  { title: "Deliver", text: "Ship, gather feedback, and keep improving." },
];

export default function Process() {
  return (
    <Section id="process" alt>
      <SectionTitle
        title="My Development Process"
        text="A simple, repeatable path from idea to launch."
      />
      <Cards items={steps} cols="md:grid-cols-2 lg:grid-cols-5" />
    </Section>
  );
}
