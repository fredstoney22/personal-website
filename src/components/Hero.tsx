import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

type HeroProps = {
  projectHref: string;
};

export function Hero({ projectHref }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="relative mx-auto grid min-h-[min(88vh,52rem)] max-w-none lg:grid-cols-2">
        <div className="animate-fade-up flex flex-col justify-end px-5 pb-16 pt-14 sm:px-8 lg:mx-auto lg:w-full lg:max-w-[calc((80rem-4rem)/2+2rem)] lg:justify-center lg:pb-20 lg:pl-8 lg:pr-12 lg:pt-20">
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
            <Link
              href={projectHref}
              className="inline-flex items-center justify-center rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:bg-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View project
            </Link>
          </div>
        </div>

        <div className="animate-fade-up-delay relative min-h-[22rem] w-full lg:min-h-full">
          <Image
            src="/images/hero.jpg"
            alt={`Portrait of ${site.name}`}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
