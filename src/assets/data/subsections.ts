import { Subsection } from "../../@types";

export const subsections: Subsection = {
  stack: {
    title: "Stack",
  },
  skills: {
    title: "Skills",
    itemsBlockLeft: [
      { legend: "React", value: 5 },
      { legend: "TypeScript", value: 5 },
      { legend: "NextJS", value: 5 },
      { legend: "Storybook", value: 4 },
      { legend: "Web3.js", value: 4 },
      { legend: "Express.js", value: 4 },
    ],
    itemsBlockRight: [
      { legend: "Python", value: 4 },
      { legend: "Flask", value: 4 },
      { legend: "Django REST Framework", value: 4 },
      { legend: "MongoDB", value: 3 },
      { legend: "MySQL", value: 3 },
      { legend: "React Native", value: 2 },
    ],
  },
  languages: {
    title: "Languages",
    itemsBlockLeft: [{ legend: "English", value: 5 }],
    itemsBlockRight: [{ legend: "Mandarin", value: 4 }],
  },
  tools: {
    title: "Tools",
    itemsBlockLeft: [
      { legend: "GitHub", value: 5 },
      { legend: "AWS", value: 4 },
      { legend: "Git", value: 4 },
    ],
    itemsBlockRight: [
      { legend: "Docker", value: 3 },
      { legend: "Cloudflare", value: 2 },
      { legend: "Kubernetes", value: 1 },
    ],
  },
};
