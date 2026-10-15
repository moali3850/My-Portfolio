import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import { exploring } from '../data/skills'

export default function Exploring() {
  return (
    <Section id="exploring">
      <SectionTitle title="Currently Exploring" text="Technologies and concepts I'm learning right now." />
      <ul className="flex flex-wrap gap-3">
        {exploring.map((item, i) => (
          <Reveal as="li" key={item} delay={i * 100} className="rounded-full border border-accent/30 px-5 py-2.5 font-medium">{item}</Reveal>
        ))}
      </ul>
    </Section>
  )
}
