export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  role: string;
  tools: string[];
  overview: string;
  problem: string;
  built: string;
  impact: string;
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
    role: "Solo",
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
    overview:
      "An installable PWA puzzle game: apply templates to a grid of pigment cells, mixing Red/Yellow/Blue, until every cell clears to white.",
    problem:
      "Grid-toggle puzzles are easy to generate randomly but hard to generate well — most random boards are trivially easy or unsolvable, and difficulty needs to be tunable.",
    built:
      "A SvelteKit + Hono monorepo: a puzzle engine that models the board as linear equations over GF(2) to generate, solve, and score difficulty; a procedurally generated daily puzzle; Google OAuth accounts; and a Stripe storefront for paid packs.",
    impact:
      "A live, monetized product — real accounts, real payments, not a tech demo.",
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
    role: "Solo",
    tools: [
      "SvelteKit",
      "TypeScript",
      "Google GenAI",
      "Upstash Redis",
      "Vercel",
    ],
    overview:
      "Over the Rock is a daily briefing site that uses AI to gather and summarize recent stories across global news and internet culture, then presents them in a conversational, skimmable format.",
    problem:
      "News feeds are noisy and fragmented. Most people want a short, trustworthy catch-up — not another infinite scroll of headlines competing for attention.",
    built:
      "A SvelteKit app that generates and serves a daily AI briefing, caches content with Upstash Redis, renders sanitized Markdown, and deploys on Vercel at overtherock.frederickstoney.com.",
    impact:
      "A live product that delivers a fresh briefing each day — one place to scan what matters without digging through a dozen tabs.",
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
    role: "Solo",
    tools: ["SvelteKit", "Svelte 5", "TypeScript", "Vercel", "Resend"],
    overview:
      "A bilingual invitation site — every page (schedule, travel, hotels, FAQs) has an /es mirror — with an RSVP flow that logs each response to a Google Sheet and sends a confirmation email.",
    problem:
      "A destination wedding with a bilingual, international guest list needs logistics (transport, lodging, schedule) presented clearly in two languages, plus a low-friction way to collect RSVPs and dietary/song info without a heavyweight event platform.",
    built:
      "A SvelteKit site with a custom cream/gold visual theme, an RSVP API route that writes to a Google Sheet via an Apps Script webhook and optionally emails a confirmation through Resend, and full English/Spanish route parity.",
    impact:
      "The live site guests use to plan travel and RSVP for the wedding.",
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
