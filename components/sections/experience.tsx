import { BlossomIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Building products and leading the teams behind them">
      <ol className="relative space-y-12 border-l border-border pl-8">
        {experience.map((item) => (
          <li key={item.company} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[42px] top-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-border bg-bg text-sakura"
            >
              <BlossomIcon className="h-4 w-4" />
            </span>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">{item.period}</p>
            <h3 className="mt-2 font-display text-xl font-bold text-text sm:text-2xl">{item.role}</h3>
            <p className="mt-1 text-text">
              {item.company}
              {item.companyNote ? <span className="text-muted"> ({item.companyNote})</span> : null}
            </p>
            {item.bullets.length > 0 ? (
              <ul className="mt-4 space-y-2 text-muted">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 leading-relaxed">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sakura" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </Section>
  );
}
