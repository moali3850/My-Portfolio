import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";

const highlights = [
  "Clean, readable code",
  "Responsive design",
  "Continuous learning",
  "Attention to detail",
];
const blocks = [
  [
    "Introduction",
    "I'm a Front-End Developer focused on building modern web interfaces. I've been learning and working with HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, MUi, and React.",
  ],
  [
    "Philosophy",
    "Good interfaces are simple, consistent, and accessible. I write code that other people can read and maintain, and I sweat the small details.",
  ],
  [
    "Learning journey",
    "I started with the fundamentals of HTML and CSS, moved into JavaScript, and now build component-based apps with React and Tailwind CSS. I keep learning with every project.",
  ],
];

export default function About() {
  return (
    <Section id="about">
      <SectionTitle title="About Me" />
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-8">
          {blocks.map(([h, p], i) => (
            <Reveal key={h} delay={i * 120}>
              <h3 className="text-xl font-bold">{h}</h3>
              <p className="mt-2 text-lg text-muted">{p}</p>
            </Reveal>
          ))}
        </div>
        <ul className="grid content-start gap-4">
          {highlights.map((h, i) => (
            <Reveal
              as="li"
              key={h}
              delay={i * 120}
             
            >
              <div  className="
              rounded-2xl border border-white/10 bg-card px-6 py-5 font-semibold
              transition duration-300 hover:-translate-y-0.5 hover:border-accent/40
              " >
              <span className="mr-3 text-accent text-2xl">•</span>
              {h}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
