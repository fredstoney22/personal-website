import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

export default function HomePage() {
  const featured = projects[0];

  return (
    <>
      <Hero projectHref={`/projects/${featured.slug}`} />
      <Intro />

      <section
        id="projects"
        aria-labelledby="projects-heading"
        className="border-b border-border"
      >
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2
              id="projects-heading"
              className="font-display text-3xl tracking-tight text-ink sm:text-4xl"
            >
              Projects
            </h2>
            <a
              href={site.resumePath}
              download
              className="text-sm font-medium text-accent underline-offset-4 hover:underline"
            >
              {site.resumeLabel}
            </a>
          </div>
          <ul className="mt-8 divide-y divide-border border-t border-border">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-5"
                >
                  <span className="font-display text-xl tracking-tight text-ink transition-colors group-hover:text-accent">
                    {project.title}
                  </span>
                  <span className="max-w-xl text-sm text-muted">
                    {project.summary}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
