import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";
export const alt = "ANNAM - Tamil Nadu on a Banana Leaf";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#122B1E",
          backgroundImage:
            "radial-gradient(circle at 50% 40%, rgba(212, 98, 19, 0.25), transparent 70%), radial-gradient(circle at 80% 80%, rgba(197, 160, 89, 0.2), transparent 50%)",
          color: "#FAF7F2",
          fontFamily: "serif",
          padding: "60px",
          textAlign: "center",
          border: "16px solid #C5A059",
        }}
      >
        <div
          style={{
            fontSize: "22px",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#C5A059",
            marginBottom: "16px",
            fontWeight: 600,
            display: "flex",
          }}
        >
          அன்னம் · CHENNAI, TAMIL NADU
        </div>

        <div
          style={{
            fontSize: "88px",
            fontWeight: "normal",
            letterSpacing: "-0.03em",
            color: "#FAF7F2",
            lineHeight: 1.05,
            marginBottom: "16px",
            display: "flex",
          }}
        >
          {siteConfig.name}
        </div>

        <div
          style={{
            fontSize: "36px",
            color: "#D46213",
            fontStyle: "italic",
            marginBottom: "28px",
            display: "flex",
          }}
        >
          {`"${siteConfig.tagline}"`}
        </div>

        <div
          style={{
            fontSize: "22px",
            color: "#FAF7F2",
            opacity: 0.85,
            maxWidth: "850px",
            lineHeight: 1.45,
            fontWeight: 300,
            display: "flex",
          }}
        >
          Chettinad Spice Boxes · Madurai Street Fire · Temple Tiffin · Banana Leaf Sappadu · Filter Kaapi
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "36px",
            gap: "24px",
            fontSize: "18px",
            color: "#C5A059",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          <span>4th Avenue, Anna Nagar</span>
          <span>·</span>
          <span>Daily 7:00 AM – 10:30 PM</span>
          <span>·</span>
          <span>Pure Tamil Hospitality</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
