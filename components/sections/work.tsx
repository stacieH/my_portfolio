import type { ComponentType } from "react";
import {
  CardIcon,
  CartIcon,
  DashboardIcon,
  PackageIcon,
  PhoneIcon,
  ReceiptIcon,
  SchoolIcon,
  TicketIcon,
  type IconProps,
} from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { card } from "@/components/ui/styles";
import { Tag } from "@/components/ui/tag";
import type { WorkIcon } from "@/content/types";
import { workDomains } from "@/content/work";

const workIcons: Record<WorkIcon, ComponentType<IconProps>> = {
  cart: CartIcon,
  card: CardIcon,
  school: SchoolIcon,
  dashboard: DashboardIcon,
  receipt: ReceiptIcon,
  phone: PhoneIcon,
  ticket: TicketIcon,
  package: PackageIcon,
};

export function Work() {
  return (
    <Section
      id="work"
      tone="soft"
      eyebrow="Work"
      title="Products and systems I've helped build"
      description="Product domains where I contributed frontend engineering, integrations, reusable components, and scalable UI."
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {workDomains.map((domain) => {
          const Icon = workIcons[domain.icon];
          return (
            <li key={domain.title} className={`${card} p-6`}>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-surface-soft text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-text">{domain.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{domain.description}</p>
              {domain.stack.length > 0 ? (
                <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-2">
                  {domain.stack.map((tech) => (
                    <li key={tech}>
                      <Tag>{tech}</Tag>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
