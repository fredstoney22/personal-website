import { site } from "@/content/site";

export function Intro() {
  return (
    <section aria-labelledby="about-heading" className="animate-fade-up-delay-2 border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <h2
          id="about-heading"
          className="font-display text-3xl tracking-tight text-ink sm:text-4xl"
        >
          Introduction
        </h2>
        <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-muted sm:text-lg">
          {site.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
