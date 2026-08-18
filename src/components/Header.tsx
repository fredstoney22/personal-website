import Link from "next/link";
import { site } from "@/content/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: site.resumePath, label: "Résumé", download: true },
  { href: `mailto:${site.email}`, label: "Contact", external: true },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-[#e9eef2]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-ink transition-opacity hover:opacity-70"
        >
          {site.name}
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm">
          {links.map((link) =>
            ("download" in link && link.download) ||
            ("external" in link && link.external) ? (
              <a
                key={link.href}
                href={link.href}
                download={"download" in link ? link.download : undefined}
                className="text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
