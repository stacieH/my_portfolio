"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ExternalLink } from "@/components/ui/external-link";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { navItems } from "@/lib/navigation";

type MobileNavProps = {
  githubUrl: string;
};

export function MobileNav({ githubUrl }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text transition-colors hover:border-accent hover:text-accent"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
      </button>
      <nav
        id="mobile-nav-panel"
        aria-label="Mobile"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-border bg-bg px-4 pb-6 pt-2 shadow-lg"
      >
        <ul className="flex flex-col">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base text-text hover:bg-surface-soft hover:text-accent"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <ExternalLink
              href={githubUrl}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-base text-text hover:bg-surface-soft hover:text-accent"
            >
              GitHub
            </ExternalLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
