import Image from "next/image";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="animate-fade-up flex flex-col">
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {site.name}
          </h1>
          <p className="mt-5 max-w-md text-lg text-foreground sm:text-xl">
            {site.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.resumePath}
              download
              className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {site.resumeLabel}
            </a>
          </div>
        </div>

        <div className="animate-fade-up-delay relative aspect-[331/432] w-48 shrink-0 overflow-hidden rounded-2xl sm:w-64">
          <Image
            src="/images/hero.jpg"
            alt={`Portrait of ${site.name}`}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 640px) 12rem, 16rem"
          />
        </div>
      </div>
    </section>
  );
}
