interface SectionDividerProps {
  variant: "wave" | "curve" | "tilt" | "peaks";
  fillColor: string;
  position?: "top" | "bottom";
  flip?: boolean;
  className?: string;
}

export default function SectionDivider({
  variant,
  fillColor,
  position = "bottom",
  flip = false,
  className = "",
}: SectionDividerProps) {
  const positionClass =
    position === "bottom" ? "bottom-0" : "top-0";
  const flipStyle = flip ? { transform: "scaleX(-1)" } : {};

  if (variant === "tilt") {
    return (
      <div
        className={`wave-divider ${positionClass} ${className}`}
        style={{
          ...flipStyle,
          height: "4vw",
          minHeight: "30px",
        }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full block"
        >
          <polygon
            fill={fillColor}
            points={
              position === "bottom"
                ? "0,120 1200,0 1200,120"
                : "0,0 1200,0 1200,120"
            }
          />
        </svg>
      </div>
    );
  }

  if (variant === "curve") {
    return (
      <div
        className={`wave-divider ${positionClass} ${className}`}
        style={{
          ...flipStyle,
          height: "6vw",
          minHeight: "40px",
        }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full block"
        >
          <path
            fill={fillColor}
            d={
              position === "bottom"
                ? "M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
                : "M0,60 C300,0 900,120 1200,60 L1200,0 L0,0 Z"
            }
          />
        </svg>
      </div>
    );
  }

  if (variant === "peaks") {
    return (
      <div
        className={`wave-divider ${positionClass} ${className}`}
        style={{
          ...flipStyle,
          height: "5vw",
          minHeight: "36px",
        }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full block"
        >
          <path
            fill={fillColor}
            d={
              position === "bottom"
                ? "M0,120 L0,80 L150,40 L300,90 L450,20 L600,70 L750,30 L900,85 L1050,15 L1200,60 L1200,120 Z"
                : "M0,0 L0,40 L150,80 L300,30 L450,100 L600,50 L750,90 L900,35 L1050,105 L1200,60 L1200,0 Z"
            }
          />
        </svg>
      </div>
    );
  }

  // wave (default) — 2-layer S-curve
  return (
    <div
      className={`wave-divider ${positionClass} ${className}`}
      style={{
        ...flipStyle,
        height: "6vw",
        minHeight: "40px",
      }}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-full block"
      >
        {/* Back layer — slightly transparent for depth */}
        <path
          fill={fillColor}
          fillOpacity="0.3"
          d="M0,80 C200,120 400,40 600,80 C800,120 1000,40 1200,80 L1200,120 L0,120 Z"
        />
        {/* Front layer — full opacity */}
        <path
          fill={fillColor}
          d="M0,90 C150,120 350,60 600,90 C850,120 1050,60 1200,90 L1200,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}
