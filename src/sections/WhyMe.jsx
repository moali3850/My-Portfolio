import { Code2, Smartphone, Eye, TrendingUp } from "lucide-react";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Cards from "./Cards";

const items = [
  {
    icon: Code2,
    title: "Clean code",
    text: "Readable, modular code that is easy to maintain.",
  },
  {
    icon: Smartphone,
    title: "Responsive design",
    text: "Interfaces that feel right on every device.",
  },
  {
    icon: Eye,
    title: "Attention to detail",
    text: "Spacing, states, and small interactions get proper care.",
  },
  {
    icon: TrendingUp,
    title: "Continuous improvement",
    text: "I learn from feedback and keep sharpening my skills.",
  },
];

export default function WhyMe() {
  return (
    <Section id="why-me" alt>
      <SectionTitle title="Why Work With Me" />
      <Cards items={items} />
    </Section>
  );
}
