import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ExternalLink } from "@/components/ui/external-link";
import { ArrowRightIcon, GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from "@/components/ui/icons";
import { buttonPrimary, buttonSecondary } from "@/components/ui/styles";
import { profile } from "@/content/profile";
import { contactEmail } from "@/lib/site";

export function Hero() {
  return (
    <section id="home" aria-labelledby="home-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sakura/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-sakura/15 blur-3xl"
      />
      <Container className="relative py-20 sm:py-28 lg:py-32">
        <div className="flex flex-col-reverse items-start gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 font-mono text-xs text-muted">
              <MapPinIcon className="h-3.5 w-3.5 text-accent" />
              {profile.location}
            </p>
            <h1
              id="home-title"
              className="mt-6 font-display text-4xl font-bold leading-[1.1] text-text sm:text-5xl lg:text-6xl"
            >
              {profile.name}
            </h1>
            <p className="mt-3 font-mono text-sm uppercase tracking-[0.18em] text-accent">{profile.title}</p>
            <p className="mt-6 text-lg leading-relaxed text-muted">{profile.summary}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/#projects" className={buttonPrimary}>
                View projects
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <a href={`mailto:${contactEmail}`} className={buttonSecondary}>
                <MailIcon className="h-4 w-4" />
                Email
              </a>
              <ExternalLink href={profile.links.linkedin} className={buttonSecondary}>
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </ExternalLink>
              <ExternalLink href={profile.links.github} className={buttonSecondary}>
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </ExternalLink>
            </div>
          </div>
          <div className="relative shrink-0">
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-full bg-linear-to-br from-sakura to-accent opacity-60 blur-md"
            />
            <Image
              src={profile.photo.src}
              alt={profile.photo.alt}
              width={profile.photo.width}
              height={profile.photo.height}
              loading="eager"
              sizes="160px"
              className="relative h-32 w-32 rounded-full border-4 border-surface object-cover sm:h-40 sm:w-40"
            />
          </div>
        </div>
        <dl className="mt-14 grid gap-4 sm:grid-cols-3">
          {profile.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col-reverse rounded-2xl border border-border bg-surface/80 p-5 backdrop-blur"
            >
              <dt className="text-sm text-muted">{stat.label}</dt>
              <dd className="mb-1 font-display text-2xl font-bold text-text">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
