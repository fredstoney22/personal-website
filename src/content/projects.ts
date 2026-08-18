export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  tools: string[];
  productSummary: string;
  technicalSummary: string;
  links: {
    label: string;
    href: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "prism",
    title: "Prism",
    summary:
      "A colour-mixing logic puzzle game with accounts, daily puzzles, and a Stripe-backed storefront for paid packs.",
    year: "2026",
    tools: [
      "SvelteKit",
      "Svelte 5",
      "Hono",
      "TypeScript",
      "Drizzle ORM",
      "PostgreSQL",
      "better-auth",
      "Stripe",
      "Vercel",
    ],
    productSummary:
      "Players mix Red/Yellow/Blue pigments across a grid to clear it to white. Includes accounts, a daily puzzle, and a storefront for paid puzzle packs.",
    technicalSummary:
      "SvelteKit + Hono monorepo. The puzzle engine models the board as linear equations over GF(2) to generate, solve, and score difficulty. Google OAuth via better-auth, Postgres/Drizzle, and a Stripe storefront kept in sync with the pack catalog.",
    links: [
      {
        label: "Live site",
        href: "https://prism.frederickstoney.com/",
      },
      {
        label: "GitHub",
        href: "https://github.com/fredstoney22/flip",
      },
    ],
  },
  {
    slug: "over-the-rock",
    title: "Over the Rock",
    summary:
      "Daily AI-curated news briefing that cuts through the noise — global news and internet culture in a readable morning format.",
    year: "2026",
    tools: [
      "SvelteKit",
      "TypeScript",
      "Google GenAI",
      "Upstash Redis",
      "Vercel",
    ],
    productSummary:
      "A daily AI-generated news briefing — global news and internet culture, summarized in a conversational, skimmable format.",
    technicalSummary:
      "SvelteKit app on Vercel. A daily cron job calls Gemini with grounded web search and caches the result in Upstash Redis, so the site serves sanitized Markdown without per-request LLM calls.",
    links: [
      {
        label: "Live site",
        href: "https://overtherock.frederickstoney.com/",
      },
      {
        label: "GitHub",
        href: "https://github.com/fredstoney22/over-the-rock",
      },
    ],
  },
  {
    slug: "wedding-website",
    title: "Wedding Website",
    summary:
      "A bilingual (English/Spanish) wedding site with a full RSVP flow, built for a destination wedding in Colombia.",
    year: "2026",
    tools: ["SvelteKit", "Svelte 5", "TypeScript", "Vercel", "Resend"],
    productSummary:
      "A bilingual invitation site — schedule, travel, hotels, and FAQs, each with an /es mirror — plus an RSVP flow for a destination wedding in Colombia.",
    technicalSummary:
      "SvelteKit site with full English/Spanish route parity. The RSVP form posts to an API route that logs to a Google Sheet via an Apps Script webhook and sends a confirmation email through Resend.",
    links: [
      {
        label: "Live site",
        href: "https://carolina.frederickstoney.com/",
      },
      {
        label: "GitHub",
        href: "https://github.com/fredstoney22/wedding-website",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
