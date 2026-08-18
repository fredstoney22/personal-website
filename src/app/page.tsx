import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { ProjectCard } from "@/components/ProjectCard";
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
              Selected project
            </h2>
            <a
              href={site.resumePath}
              download
              className="text-sm font-medium text-accent underline-offset-4 hover:underline"
            >
              {site.resumeLabel}
            </a>
          </div>
          <div className="mt-8">
            <ProjectCard project={featured} />
          </div>
        </div>
      </section>
    </>
  );
}
