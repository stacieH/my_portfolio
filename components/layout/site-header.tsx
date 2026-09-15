import Link from "next/link";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Container } from "@/components/ui/container";
import { ExternalLink } from "@/components/ui/external-link";
import { BlossomIcon, GitHubIcon } from "@/components/ui/icons";
import { profile } from "@/content/profile";
import { navItems } from "@/lib/navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-bg/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Harlene Jaramillos, home"
          className="flex items-center gap-2 font-display text-lg font-bold text-text"
        >
          <BlossomIcon className="h-6 w-6 text-sakura" />
          <span>
            Harlene<span className="text-accent">&apos;</span>s Portfolio
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <ExternalLink
            href={profile.links.github}
            className="hidden items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm text-text transition-colors hover:border-accent hover:text-accent md:inline-flex"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </ExternalLink>
          <ThemeToggle />
          <MobileNav githubUrl={profile.links.github} />
        </div>
      </Container>
    </header>
  );
}
