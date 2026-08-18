import { LinkedInIcon } from "@/components/LinkedInIcon";
import { site } from "@/content/site";

export function ContactStrip() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <h2
          id="contact-heading"
          className="font-display text-3xl tracking-tight text-ink sm:text-4xl"
        >
          Contact
        </h2>
        <ul className="mt-8 flex flex-col gap-3 text-base sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
          <li>
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-accent underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              {site.email}
            </a>
          </li>
          <li>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex text-accent transition-colors hover:text-ink"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
