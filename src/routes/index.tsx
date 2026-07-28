import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Photorealistic Church — 3D Architectural Visualization" },
      {
        name: "description",
        content:
          "Explore a photorealistic 3D model of a church with PBR materials, HDRI-based lighting, soft shadows, and cinematic post-processing.",
      },
      { property: "og:title", content: "Photorealistic Church — 3D Architectural Visualization" },
      {
        property: "og:description",
        content:
          "Interactive photorealistic church model built with Three.js: PBR materials, image-based lighting, ACES tone mapping, bloom and SSAO.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-background">
      <h1 className="sr-only">Photorealistic 3D Church Architectural Visualization</h1>
      <iframe
        src="/church-hd.html"
        title="Photorealistic 3D church model"
        className="h-full w-full border-0"
        allow="fullscreen"
      />
    </main>
  );
}
