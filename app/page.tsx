import type { Metadata } from "next";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Work } from "@/components/sections/work";
import { personJsonLd, serializeJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(personJsonLd()) }} />
      <Hero />
      <Experience />
      <Work />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
    </>
  );
}
