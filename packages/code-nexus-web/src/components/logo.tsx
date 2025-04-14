export const nexusLogo = (width = "100", height = "100", mask = false) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 100 100"
    fill="none"
    className={mask ? "mask-icon" : ""}
  >
    <path
      d="M5 38C5 36.3431 6.34315 35 8 35H32C33.6569 35 35 36.3431 35 38V62C35 63.6569 33.6569 65 32 65H8C6.34315 65 5 63.6569 5 62V38Z"
      fill="white"
    />
    <rect x="65" y="35" width="30" height="30" rx="3" fill="white" />
    <path
      d="M34 36L65.719 64.305"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="34"
      y1="36"
      x2="34"
      y2="8"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="34"
      y1="8"
      x2="62"
      y2="8"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M62 8L94 37"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M67.0143 65.5867L35.6128 36.9299"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="67.0144"
      y1="65.5867"
      x2="66.7023"
      y2="93.585"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="66.7022"
      y1="93.585"
      x2="38.704"
      y2="93.2729"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M38.7039 93.2729L7.02916 63.918"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
