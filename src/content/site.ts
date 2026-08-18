export const site = {
  name: "Frederick Stoney",
  title: "Software Engineer",
  tagline: "Product-minded builder.",
  availability: "Open to opportunities · Remote",
  intro: [
    "I'm a software engineer who ships web products from idea to launch — interfaces people enjoy using and systems that hold up under real use.",
    "This site is a living portfolio: a short introduction, selected work, and an up-to-date résumé for anyone evaluating me for hire.",
  ],
  email: "fredstoney22@gmail.com",
  social: {
    linkedin: "https://linkedin.com/in/placeholder",
  },
  resumePath: "/resume.pdf",
  resumeLabel: "Download résumé",
} as const;

export type Site = typeof site;
