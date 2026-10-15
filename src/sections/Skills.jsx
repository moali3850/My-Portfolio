import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <Section id="skills" alt>
      <SectionTitle
        title="Tech Stack"
        text="The tools I use to design, build, and ship interfaces."
      />
      <div className="grid gap-8 lg:grid-cols-3">
        {skillGroups.map((group, g) => (
          <div key={group.title}>
            <Reveal
              as="h3"
              delay={g * 120}
              className="mb-4 text-lg font-bold text-accent"
            >
              {group.title}
            </Reveal>
            <ul className="grid gap-3">
              {group.skills.map(({ name, icon: Icon }, i) => (
                <Reveal as="li" key={name} delay={g * 120 + i * 100}>
                  <div
                    className="
                    flex items-center gap-4 rounded-2xl border border-white/10 bg-card px-5 py-4
                    transition duration-300 hover:-translate-y-0.5 hover:border-accent/40
                    "
                  >
                    <Icon className="text-accent" size={22} />
                    <span className="font-semibold">{name}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
