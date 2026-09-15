import type { ComponentType, ReactNode } from "react";
import { ExternalLink } from "@/components/ui/external-link";
import { GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon, type IconProps } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { card } from "@/components/ui/styles";
import { profile } from "@/content/profile";
import { contactEmail } from "@/lib/site";

type ContactItem = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  icon: ComponentType<IconProps>;
};

const items: ContactItem[] = [
  { label: "Email", value: contactEmail, href: `mailto:${contactEmail}`, icon: MailIcon },
  { label: "LinkedIn", value: "in/harlene-jaramillos-726821121", href: profile.links.linkedin, external: true, icon: LinkedInIcon },
  { label: "GitHub", value: "github.com/stacieH", href: profile.links.github, external: true, icon: GitHubIcon },
  { label: "Location", value: profile.location, icon: MapPinIcon },
];

function ContactCardBody({ item }: { item: ContactItem }): ReactNode {
  const Icon = item.icon;
  return (
    <>
      <Icon className="block h-5 w-5 text-accent" />
      <span className="mt-4 block font-mono text-xs uppercase tracking-[0.15em] text-muted">{item.label}</span>
      <span className="mt-1 block wrap-anywhere font-semibold text-text">{item.value}</span>
    </>
  );
}

export function Contact() {
  const cardClass = `${card} block h-full p-5`;

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something meaningful"
      description="Open to front-end and team lead opportunities. Reach out by email or connect on LinkedIn."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <li key={item.label}>
            {item.href && item.external ? (
              <ExternalLink href={item.href} className={cardClass}>
                <ContactCardBody item={item} />
              </ExternalLink>
            ) : item.href ? (
              <a href={item.href} className={cardClass}>
                <ContactCardBody item={item} />
              </a>
            ) : (
              <div className={cardClass}>
                <ContactCardBody item={item} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
