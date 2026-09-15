type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl sm:mb-14">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 id={id} className="mt-3 font-display text-3xl font-bold leading-tight text-text sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 leading-relaxed text-muted">{description}</p> : null}
    </div>
  );
}
