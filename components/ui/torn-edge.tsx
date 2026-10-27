import React from "react";

interface TornEdgeProps {
  fill?: string;
  className?: string;
  flip?: boolean;
}

export function TornEdge({
  fill = "#0C1814",
  className = "",
  flip = false,
}: TornEdgeProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${
        flip ? "rotate-180" : ""
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className="w-full h-10 sm:h-14 lg:h-16 block"
      >
        <path
          d="M0,32 
             C45,28 75,44 120,38 
             C165,32 195,18 240,24 
             C285,30 315,48 360,42 
             C405,36 435,20 480,26 
             C525,32 555,46 600,40 
             C645,34 675,22 720,28 
             C765,34 795,50 840,44 
             C885,38 915,24 960,30 
             C1005,36 1035,52 1080,46 
             C1125,40 1155,26 1200,32 
             C1245,38 1275,54 1320,48 
             C1365,42 1405,26 1440,32 
             L1440,64 L0,64 Z"
          fill={fill}
        />
        {/* Subtle deckled edge highlight */}
        <path
          d="M0,32 
             C45,28 75,44 120,38 
             C165,32 195,18 240,24 
             C285,30 315,48 360,42 
             C405,36 435,20 480,26 
             C525,32 555,46 600,40 
             C645,34 675,22 720,28 
             C765,34 795,50 840,44 
             C885,38 915,24 960,30 
             C1005,36 1035,52 1080,46 
             C1125,40 1155,26 1200,32 
             C1245,38 1275,54 1320,48 
             C1365,42 1405,26 1440,32"
          fill="none"
          stroke="#C5A880"
          strokeWidth="1.2"
          strokeOpacity="0.35"
        />
      </svg>
    </div>
  );
}
