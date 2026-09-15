import Link from "next/link";
import { BlossomDivider } from "@/components/ui/blossom-divider";
import { Container } from "@/components/ui/container";
import { profile } from "@/content/profile";
import { navItems } from "@/lib/navigation";

// Evaluated once at build time (static prerender). Kept outside the component so render stays pure.
const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-soft/60">
      <Container className="py-10">
        <BlossomDivider />
        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-lg font-bold text-text">{profile.shortName}</p>
            <p className="text-sm text-muted">{profile.title}</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted transition-colors hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-8 text-xs text-muted">
          © {year} {profile.name}. Built with Next.js and Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}
