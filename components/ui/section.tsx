import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "default" | "soft";
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, tone = "default", children }: SectionProps) {
  const titleId = `${id}-title`;
  const toneClass = tone === "soft" ? "bg-surface-soft/60" : "";

  return (
    <section id={id} aria-labelledby={titleId} className={`py-20 sm:py-28 ${toneClass}`}>
      <Container>
        <SectionHeading id={titleId} eyebrow={eyebrow} title={title} description={description} />
        {children}
      </Container>
    </section>
  );
}
