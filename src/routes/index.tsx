import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "3D Church Model | FFIM" },
      {
        name: "description",
        content:
          "Church model for Flourishing Field International Ministries",
      },
      { property: "og:title", content: "3D Church Model | FFIM" },
      {
        property: "og:description",
        content:
          "Church model for Flourishing Field International Ministries",
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
