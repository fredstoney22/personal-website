import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/content/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Software engineer and product-minded builder. Selected projects, tools, and an up-to-date résumé.",
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description:
      "Product-minded builder. Projects, tools, and résumé for hiring conversations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="site-backdrop relative flex min-h-full flex-col font-sans text-foreground">
        <div className="site-grain" aria-hidden="true" />
        <Header />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
