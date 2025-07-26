interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ className = "", width = 32, height = 32 }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="200" height="100" fill="currentColor" opacity="0.1" />
      
      {/* KeGi Text */}
      <text
        x="100"
        y="55"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Lufga, sans-serif"
        fontWeight="600"
        fontSize="40"
        fill="currentColor"
      >
        KeGi
      </text>
      
      {/* Wine Glass Icon */}
      <path d="M90 65 L110 65 L105 50 L95 50 L90 65 Z" fill="currentColor" />
      <path d="M100 50 L100 30" stroke="currentColor" strokeWidth="2" />
      <path d="M90 30 C90 20, 110 20, 110 30 L100 50 Z" fill="currentColor" />
      
      {/* "Wines & Lounge" tagline */}
      <text
        x="100"
        y="80"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Lufga, sans-serif"
        fontWeight="400"
        fontSize="14"
        fill="currentColor"
        opacity="0.6"
      >
        Wines & Lounge
      </text>
    </svg>
  );
} 