import { Section } from "@/components/ui/section";
import { card } from "@/components/ui/styles";
import { profile } from "@/content/profile";

export function Education() {
  const { education } = profile;

  return (
    <Section id="education" tone="soft" eyebrow="Education" title="Foundations in computer science">
      <div className={`${card} flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between`}>
        <div>
          <h3 className="font-display text-xl font-bold text-text">{education.degree}</h3>
          <p className="mt-1 text-muted">{education.school}</p>
        </div>
        <p className="font-mono text-sm text-accent">{education.period}</p>
      </div>
    </Section>
  );
}
