import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ANNAM · Tamil Nadu on a Banana Leaf",
    short_name: "ANNAM",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FAF7F2",
    theme_color: "#122B1E",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
