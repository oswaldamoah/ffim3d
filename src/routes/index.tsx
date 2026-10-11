import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FFIM 3D" },
      {
        name: "description",
        content:
          "Explore a photorealistic 3D model of a church with PBR materials, HDRI-based lighting, soft shadows, and cinematic post-processing.",
      },
      { property: "og:title", content: "FFIM 3D" },
      {
        property: "og:description",
        content:
          "Explore a photorealistic 3D model of a church with PBR materials, HDRI-based lighting, soft shadows, and cinematic post-processing.",
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
        onLoad={(e) => e.currentTarget.contentWindow?.focus()}
      />
    </main>
  );
}
