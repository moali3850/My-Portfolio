import { Smartphone, Layers, Accessibility, Zap } from "lucide-react";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Cards from "./Cards";

const items = [
  {
    icon: Smartphone,
    title: "Responsive interfaces",
    text: "Layouts that work on phones, tablets, laptops, and large screens.",
  },
  {
    icon: Layers,
    title: "Component-based UI",
    text: "Reusable React components that keep code organized and easy to change.",
  },
  {
    icon: Accessibility,
    title: "Accessible by default",
    text: "Semantic HTML, keyboard support, and readable contrast.",
  },
  {
    icon: Zap,
    title: "Fast, polished details",
    text: "Smooth interactions and light animations that never get in the way.",
  },
];

export default function WhatIDo() {
  return (
    <Section id="what-i-do" alt>
      <SectionTitle
        title="What I Do"
        text="I turn designs and ideas into fast, usable front-end experiences."
      />
      <Cards items={items} />
    </Section>
  );
}
