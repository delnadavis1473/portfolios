// Hand-drawn line-art covers for case studies that don't have a captured
// screenshot. Each one keeps the project's original accent gradient as the
// background and adds a simple, on-brand icon illustration in its place —
// standing in for a real screenshot until one is captured.

function Sheen({ id }: { id: string }) {
  return (
    <div
      className="absolute inset-0"
      style={{
        background: `radial-gradient(circle at 28% 20%, oklch(1 0 0 / 0.45), transparent 55%)`,
      }}
      aria-hidden
      key={id}
    />
  );
}

export function StyleueArt() {
  return (
    <div className="relative h-full w-full">
      <svg viewBox="0 0 400 256" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="styleue-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.88 0.08 300)" />
            <stop offset="100%" stopColor="oklch(0.8 0.11 318)" />
          </linearGradient>
        </defs>
        <rect width="400" height="256" fill="url(#styleue-bg)" />
        {/* dress silhouette */}
        <g
          opacity="0.9"
          stroke="oklch(0.3 0.1 300 / 0.65)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M196 58c0 10-8 14-8 22s8 8 8 16" />
          <circle cx="196" cy="50" r="9" />
          <path d="M174 90c4-18 14-26 22-26s18 8 22 26l14 96c2 14-10 26-24 26h-24c-14 0-26-12-24-26z" />
          <path d="M174 90l-22 30M218 90l22 30" />
        </g>
        {/* measuring tape */}
        <g
          opacity="0.85"
          stroke="oklch(0.3 0.1 300 / 0.55)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        >
          <path d="M70 190c20-22 46-30 70-18" />
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={i} x1={78 + i * 12} y1={186 - i * 2} x2={78 + i * 12} y2={196 - i * 2} />
          ))}
        </g>
        {/* scissors */}
        <g
          transform="translate(284,150) rotate(20)"
          opacity="0.85"
          stroke="oklch(0.3 0.1 300 / 0.6)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="0" cy="0" r="7" />
          <circle cx="0" cy="22" r="7" />
          <path d="M6 5l46-40M6 17l46 40" />
        </g>
      </svg>
      <Sheen id="styleue" />
    </div>
  );
}

export function RidemateArt() {
  return (
    <div className="relative h-full w-full">
      <svg viewBox="0 0 400 256" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="ridemate-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.85 0.1 270)" />
            <stop offset="100%" stopColor="oklch(0.79 0.11 312)" />
          </linearGradient>
        </defs>
        <rect width="400" height="256" fill="url(#ridemate-bg)" />
        {/* winding route */}
        <path
          d="M30 220C90 220 90 160 150 160S190 110 250 110s40-50 110-50"
          fill="none"
          stroke="oklch(0.99 0 0 / 0.75)"
          strokeWidth="4"
          strokeDasharray="2 14"
          strokeLinecap="round"
        />
        {/* car */}
        <g
          transform="translate(150,142)"
          stroke="oklch(0.28 0.1 280 / 0.7)"
          strokeWidth="2.5"
          fill="oklch(0.99 0 0 / 0.85)"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          <path d="M-26 8 L-18 -8 L18 -8 L26 8 Z" />
          <rect x="-30" y="8" width="60" height="14" rx="6" />
          <circle cx="-16" cy="24" r="6" fill="oklch(0.28 0.1 280 / 0.7)" />
          <circle cx="16" cy="24" r="6" fill="oklch(0.28 0.1 280 / 0.7)" />
        </g>
        {/* pins */}
        <g fill="oklch(0.99 0 0 / 0.9)" stroke="oklch(0.28 0.1 280 / 0.7)" strokeWidth="2">
          <path d="M30 220a10 10 0 1 1 0.1 0z" />
          <circle cx="30" cy="218" r="3.5" fill="oklch(0.28 0.1 280 / 0.7)" stroke="none" />
          <path d="M338 60a10 10 0 1 1 0.1 0z" />
          <circle cx="338" cy="58" r="3.5" fill="oklch(0.28 0.1 280 / 0.7)" stroke="none" />
        </g>
      </svg>
      <Sheen id="ridemate" />
    </div>
  );
}

export function DigitalRevolutionArt() {
  return (
    <div className="relative h-full w-full">
      <svg viewBox="0 0 400 256" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="digrev-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.84 0.09 330)" />
            <stop offset="100%" stopColor="oklch(0.79 0.1 296)" />
          </linearGradient>
        </defs>
        <rect width="400" height="256" fill="url(#digrev-bg)" />
        <g opacity="0.55" stroke="oklch(0.99 0 0 / 0.6)" strokeWidth="1">
          {Array.from({ length: 7 }).map((_, i) => (
            <line key={i} x1={i * 60} y1="0" x2={i * 60} y2="256" />
          ))}
        </g>
        <circle
          cx="170"
          cy="118"
          r="58"
          fill="none"
          stroke="oklch(0.3 0.12 300 / 0.55)"
          strokeWidth="2.5"
        />
        <circle
          cx="225"
          cy="138"
          r="40"
          fill="oklch(0.99 0 0 / 0.5)"
          stroke="oklch(0.3 0.12 300 / 0.55)"
          strokeWidth="2.5"
        />
        <text
          x="200"
          y="146"
          textAnchor="middle"
          fontFamily="Fraunces, ui-serif, Georgia, serif"
          fontStyle="italic"
          fontSize="64"
          fill="oklch(0.28 0.12 300 / 0.78)"
        >
          Aa
        </text>
      </svg>
      <Sheen id="digrev" />
    </div>
  );
}

export function ErpDashboardArt() {
  return (
    <div className="relative h-full w-full">
      <svg viewBox="0 0 400 256" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="erp-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.85 0.07 220)" />
            <stop offset="100%" stopColor="oklch(0.8 0.09 290)" />
          </linearGradient>
        </defs>
        <rect width="400" height="256" fill="url(#erp-bg)" />
        <g>
          <rect
            x="34"
            y="40"
            width="332"
            height="176"
            rx="14"
            fill="oklch(0.99 0 0 / 0.55)"
            stroke="oklch(0.28 0.08 250 / 0.5)"
            strokeWidth="2"
          />
          {/* bar chart */}
          <g transform="translate(56,70)">
            {[28, 46, 34, 58, 40].map((h, i) => (
              <rect
                key={i}
                x={i * 24}
                y={70 - h}
                width="14"
                height={h}
                rx="3"
                fill="oklch(0.45 0.13 280 / 0.7)"
              />
            ))}
          </g>
          {/* line chart */}
          <polyline
            points="200,118 224,96 248,108 272,80 296,92 320,66 344,78"
            fill="none"
            stroke="oklch(0.4 0.14 230 / 0.75)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* kpi cards */}
          {[56, 130, 204, 278].map((x, i) => (
            <rect
              key={i}
              x={x}
              y="150"
              width="58"
              height="40"
              rx="8"
              fill="oklch(0.99 0 0 / 0.7)"
              stroke="oklch(0.28 0.08 250 / 0.35)"
              strokeWidth="1.5"
            />
          ))}
        </g>
      </svg>
      <Sheen id="erp" />
    </div>
  );
}
