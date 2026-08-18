import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects and the tools behind them.",
};

export default function ProjectsPage() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
          Projects
        </h1>
        <ul className="mt-10 space-y-6">
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
        <p className="mt-10">
          <Link
            href="/"
            className="text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            ← Back home
          </Link>
        </p>
      </div>
    </>
  );
}
