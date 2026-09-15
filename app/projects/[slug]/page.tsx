import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { ExternalLink } from "@/components/ui/external-link";
import { ArrowLeftIcon, ArrowRightIcon, BlossomIcon, GitHubIcon } from "@/components/ui/icons";
import { buttonPrimary, card } from "@/components/ui/styles";
import { Tag } from "@/components/ui/tag";
import { getAdjacentProjects, getProjectBySlug, projects } from "@/content/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const url = `/projects/${project.slug}`;
  const title = `${project.title} | Harlene Jaramillos`;

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "Harlene Jaramillos",
      title,
      description: project.summary,
      locale: "en_US",
    },
    twitter: { card: "summary_large_image", title, description: project.summary },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <article className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sakura/20 blur-3xl"
      />
      <Container className="relative py-12 sm:py-16">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent">
          <ArrowLeftIcon className="h-4 w-4" />
          All projects
        </Link>

        <header className="mt-8 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Personal project</p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-text sm:text-5xl">{project.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{project.summary}</p>
          <ul aria-label="Technologies" className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech}>
                <Tag>{tech}</Tag>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ExternalLink href={project.github} className={buttonPrimary}>
              <GitHubIcon className="h-4 w-4" />
              View on GitHub
            </ExternalLink>
          </div>
        </header>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-surface-soft shadow-[0_30px_60px_-30px_rgba(176,48,96,0.35)]">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            preload
            sizes="(min-width: 1152px) 1104px, 100vw"
            className="h-auto w-full"
          />
        </div>

        <section aria-labelledby="features-title" className="mt-16 max-w-3xl">
          <h2 id="features-title" className="font-display text-2xl font-bold text-text">
            Features
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className={`${card} flex items-start gap-3 p-4`}>
                <BlossomIcon className="mt-0.5 h-5 w-5 shrink-0 text-sakura" />
                <span className="text-text">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <nav aria-label="More projects" className="mt-16 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
          {previous ? (
            <Link href={`/projects/${previous.slug}`} className={`${card} p-5`}>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted">
                <ArrowLeftIcon className="h-3.5 w-3.5" />
                Previous
              </span>
              <span className="mt-1 block font-display text-lg font-bold text-text">{previous.title}</span>
            </Link>
          ) : (
            <div aria-hidden="true" className="hidden sm:block" />
          )}
          {next ? (
            <Link href={`/projects/${next.slug}`} className={`${card} p-5 sm:text-right`}>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted">
                Next
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </span>
              <span className="mt-1 block font-display text-lg font-bold text-text">{next.title}</span>
            </Link>
          ) : null}
        </nav>
      </Container>
    </article>
  );
}
