import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = "Harlene Jaramillos, Front-End Developer and Team Lead";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The photo does not depend on request data, so read it once at module scope.
const photoData = await readFile(join(process.cwd(), "public", "profile.jpg"), "base64");
const photoSrc = `data:image/jpeg;base64,${photoData}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 96px",
          position: "relative",
          background: "linear-gradient(135deg, #FFF7F9 0%, #FCE8EE 100%)",
          color: "#3B1F2B",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -120,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "#F4A7B9",
            opacity: 0.45,
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          width={240}
          height={240}
          alt=""
          style={{ borderRadius: 9999, border: "8px solid #FFFFFF", objectFit: "cover" }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 24, letterSpacing: 6, textTransform: "uppercase", color: "#B03060" }}>Portfolio</div>
          <div style={{ fontSize: 72, fontWeight: 700, marginTop: 16, lineHeight: 1.05 }}>{profile.shortName}</div>
          <div style={{ fontSize: 34, marginTop: 20, color: "#7A5563" }}>Front-End Developer · Team Lead</div>
          <div style={{ fontSize: 26, marginTop: 36, color: "#7A5563" }}>Next.js · React · React Native · TypeScript</div>
        </div>
      </div>
    ),
    size,
  );
}
