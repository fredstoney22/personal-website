import { GitHubIcon } from "@/components/GitHubIcon";
import { LinkedInIcon } from "@/components/LinkedInIcon";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-4 px-5 py-8 text-sm text-muted sm:px-8">
        <a
          href={`mailto:${site.email}`}
          className="transition-colors hover:text-ink"
        >
          {site.email}
        </a>
        <a
          href={site.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="inline-flex transition-colors hover:text-ink"
        >
          <LinkedInIcon className="h-4 w-4" />
        </a>
        <a
          href={site.social.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="inline-flex transition-colors hover:text-ink"
        >
          <GitHubIcon className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
