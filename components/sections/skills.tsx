import { Section } from "@/components/ui/section";
import { card } from "@/components/ui/styles";
import { Tag } from "@/components/ui/tag";
import { skillGroups } from "@/content/skills";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I use to ship reliable interfaces">
      <dl className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className={`${card} p-6`}>
            <dt className="font-display text-lg font-bold text-text">{group.title}</dt>
            <dd className="mt-4">
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
