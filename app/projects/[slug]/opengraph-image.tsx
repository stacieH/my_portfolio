import { ImageResponse } from "next/og";
import { getProjectBySlug, projects } from "@/content/projects";

export const alt = "Personal project by Harlene Jaramillos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

const maxSummaryLength = 140;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return new Response("Not found", { status: 404 });

  const summary =
    project.summary.length > maxSummaryLength
      ? `${project.summary.slice(0, maxSummaryLength - 3).trimEnd()}…`
      : project.summary;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 88,
          position: "relative",
          background: "linear-gradient(135deg, #FFF7F9 0%, #FCE8EE 100%)",
          color: "#3B1F2B",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -140,
            bottom: -140,
            width: 460,
            height: 460,
            borderRadius: 9999,
            background: "#F4A7B9",
            opacity: 0.45,
          }}
        />
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, textTransform: "uppercase", color: "#B03060" }}>
          Personal project
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.05 }}>{project.title}</div>
          <div style={{ fontSize: 32, marginTop: 24, color: "#7A5563", maxWidth: 900, lineHeight: 1.35 }}>{summary}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#7A5563" }}>
          <div style={{ display: "flex" }}>{project.stack.join(" · ")}</div>
          <div style={{ display: "flex" }}>Harlene Jaramillos</div>
        </div>
      </div>
    ),
    size,
  );
}
