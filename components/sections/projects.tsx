import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "@/components/ui/external-link";
import { ArrowRightIcon, GitHubIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { buttonPrimary, buttonSecondary, card } from "@/components/ui/styles";
import { Tag } from "@/components/ui/tag";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <Section id="projects" tone="soft" eyebrow="Personal projects" title="Side projects I build and maintain">
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug} className={`${card} flex flex-col overflow-hidden`}>
            <div className="relative aspect-[16/10] border-b border-border bg-surface-soft">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-bold text-text">
                <Link href={`/projects/${project.slug}`} className="transition-colors hover:text-accent">
                  {project.title}
                </Link>
              </h3>
              <p className="mt-2 flex-1 leading-relaxed text-muted">{project.summary}</p>
              <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={tech}>
                    <Tag>{tech}</Tag>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={`/projects/${project.slug}`} className={buttonPrimary}>
                  Read more<span className="sr-only"> about {project.title}</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <ExternalLink href={project.github} className={buttonSecondary}>
                  <GitHubIcon className="h-4 w-4" />
                  GitHub<span className="sr-only"> repository for {project.title}</span>
                </ExternalLink>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
