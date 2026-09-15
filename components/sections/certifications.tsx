import { Section } from "@/components/ui/section";
import { card } from "@/components/ui/styles";
import { certifications, courses, learningPaths } from "@/content/certifications";

const groupLabel = "font-mono text-xs uppercase tracking-[0.2em] text-muted";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Continuous learning"
      description="Learning paths, certifications, and courses from LinkedIn Learning, AWS, and HackerRank."
    >
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-5 lg:col-span-2">
          <h3 className={groupLabel}>Learning paths</h3>
          {learningPaths.map((path) => (
            <article key={path.title} className={`${card} p-6`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="font-display text-lg font-bold text-text">{path.title}</h4>
                <p className="font-mono text-xs text-muted">{path.date}</p>
              </div>
              <p className="mt-1 text-sm text-accent">{path.provider}</p>
              <ul className="mt-4 space-y-2 border-t border-border pt-4">
                {path.courses.map((course) => (
                  <li key={course.title} className="flex flex-wrap justify-between gap-x-4 gap-y-1 text-sm">
                    <span className="text-text">{course.title}</span>
                    <span className="font-mono text-xs text-muted">{course.date}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="space-y-5">
          <h3 className={groupLabel}>Certifications</h3>
          <ul className="space-y-3">
            {certifications.map((certification) => (
              <li key={certification.title} className={`${card} p-5`}>
                <p className="font-semibold text-text">{certification.title}</p>
                <p className="mt-1 text-sm text-accent">{certification.issuer}</p>
                <p className="mt-1 font-mono text-xs text-muted">{certification.date}</p>
              </li>
            ))}
          </ul>
          <h3 className={`${groupLabel} pt-4`}>Courses · LinkedIn Learning</h3>
          <ul className={`${card} divide-y divide-border`}>
            {courses.map((course) => (
              <li key={course.title} className="flex flex-col gap-1 px-5 py-3">
                <span className="text-sm text-text">{course.title}</span>
                <span className="font-mono text-xs text-muted">{course.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
