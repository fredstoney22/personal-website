import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllProjectSlugs,
  getProject,
} from "@/content/projects";
import { site } from "@/content/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const sections = [
    { id: "overview", title: "Overview", body: project.overview },
    { id: "problem", title: "Problem", body: project.problem },
    { id: "built", title: "What I built", body: project.built },
    { id: "impact", title: "Impact", body: project.impact },
  ] as const;

  return (
    <article className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="text-sm text-muted">
        {project.year} · {project.role}
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">{project.summary}</p>

      <section aria-labelledby="tools-heading" className="mt-10">
        <h2 id="tools-heading" className="text-sm font-medium uppercase tracking-wide text-muted">
          Tools
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <li
              key={tool}
              className="border border-border bg-surface px-3 py-1.5 text-sm text-foreground"
            >
              {tool}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-14 space-y-10">
        {sections.map((section) => (
          <section key={section.id} aria-labelledby={section.id}>
            <h2
              id={section.id}
              className="font-display text-2xl tracking-tight text-ink"
            >
              {section.title}
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted">
              {section.body}
            </p>
          </section>
        ))}
      </div>

      <section aria-labelledby="links-heading" className="mt-14">
        <h2
          id="links-heading"
          className="font-display text-2xl tracking-tight text-ink"
        >
          Links
        </h2>
        <ul className="mt-4 flex flex-wrap gap-4">
          {project.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent underline-offset-4 hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-16 flex flex-wrap gap-4 border-t border-border pt-8">
        <Link
          href="/projects"
          className="text-sm font-medium text-muted underline-offset-4 hover:text-ink hover:underline"
        >
          ← All projects
        </Link>
        <a
          href={site.resumePath}
          download
          className="text-sm font-medium text-accent underline-offset-4 hover:underline"
        >
          {site.resumeLabel}
        </a>
      </div>
    </article>
  );
}
