import Link from "next/link";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-[0_12px_40px_-24px_rgba(15,110,86,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-2xl tracking-tight text-ink transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="text-sm text-muted">
          {project.year} · {project.role}
        </p>
      </div>
      <p className="mt-3 max-w-2xl text-muted">{project.summary}</p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tools used">
        {project.tools.map((tool) => (
          <li
            key={tool}
            className="border border-border bg-background/70 px-2.5 py-1 text-xs text-foreground"
          >
            {tool}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm font-medium text-accent">
        View details
        <span aria-hidden="true" className="ml-1 transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </p>
    </Link>
  );
}
