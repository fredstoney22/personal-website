export const site = {
  name: "Frederick Stoney",
  title: "Software Engineer",
  tagline:
    "I love to build and optimize with software engineering, math, and statistics.",
  email: "fredstoney22@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/fred-stoney/",
    github: "https://github.com/fredstoney22",
  },
  resumePath: "/resume.pdf",
  resumeLabel: "Download résumé",
} as const;

export type Site = typeof site;
