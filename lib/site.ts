const fallbackSiteUrl = "http://localhost:3000";
const fallbackEmail = "stacie.harlene@gmail.com";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl).replace(/\/+$/, "");

// Server-only value: read during static rendering, never import from a Client Component.
export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || fallbackEmail;
