import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/data/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = profile.name;

/* Bundled rather than fetched, so the build never depends on the network. */
async function plexMono() {
  return readFile(join(process.cwd(), "assets", "plex-mono-400.ttf"));
}

export default async function OpenGraphImage() {
  const font = await plexMono();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#f6f2ea",
          padding: "80px",
          fontFamily: "Plex Mono",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#7a5a28" }}>
          faisal@sydney:~${" "}
          <span style={{ color: "#14110e", marginLeft: 14 }}>whoami</span>
        </div>
        <div style={{ marginTop: 40, fontSize: 60, color: "#14110e" }}>
          {profile.name}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Plex Mono", data: font, weight: 400, style: "normal" }],
    }
  );
}
