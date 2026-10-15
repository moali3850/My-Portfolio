import {
  Code2,
  Palette,
  Braces,
  Atom,
  Wind,
  LayoutGrid,
  GitBranch,
  Github,
  Smartphone,
} from "lucide-react";

export const skillGroups = [
  {
    title: "Core Web",
    skills: [
      { name: "HTML5", icon: Code2 },
      { name: "CSS3", icon: Palette },
      { name: "JavaScript", icon: Braces },
    ],
  },
  {
    title: "Frameworks & Styling",
    skills: [
      { name: "React", icon: Atom },
      { name: "Tailwind CSS", icon: Wind },
      { name: "Bootstrap", icon: LayoutGrid },
    ],
  },
  {
    title: "Workflow",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "Responsive Web Design", icon: Smartphone },
    ],
  },
];

export const exploring = [
  "Accessibility (WCAG)",
  "Web performance",
  "Advanced React patterns",
  "Testing components",
  "Design systems",
  "TypeScript",
];
