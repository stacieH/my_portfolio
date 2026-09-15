import { profile } from "@/content/profile";
import { contactEmail, siteUrl } from "@/lib/site";

export function personJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Front-End Developer and Team Lead",
    description: profile.summary,
    url: siteUrl,
    image: `${siteUrl}${profile.photo.src}`,
    email: `mailto:${contactEmail}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Calamba City",
      addressRegion: "Laguna",
      addressCountry: "PH",
    },
    alumniOf: { "@type": "CollegeOrUniversity", name: profile.education.school },
    sameAs: [profile.links.linkedin, profile.links.github],
    knowsAbout: ["Next.js", "React", "React Native", "TypeScript", "JavaScript", "Redux", "Material UI"],
  };
}

// JSON.stringify does not escape "<"; escape it so content cannot close the <script> tag.
export function serializeJsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
