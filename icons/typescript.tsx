import IconProps from "./types";

export default function TypescriptIcon({ size = 50, ...props }: IconProps) {
  return (
    <svg
      fill="#1A1A1A"
      viewBox="0 0 50 50"
      className="prefix__skill-svg"
      width={size}
      height={size}
      {...props}
    >
      <path d="M5 4a1 1 0 00-1 1v40a1 1 0 001 1h40a1 1 0 001-1V5a1 1 0 00-1-1H5zm1 2h38v38H6V6zm9 17v3.445h5V42h4V26.445h5V23H15zm21.691.01c-3.114-.013-6.673.931-6.673 5.314 0 5.73 7.72 5.732 7.72 8.317 0 .245.104 2.025-2.62 2.025-2.726 0-4.997-1.713-4.997-1.713v4.158s11.881 3.843 11.881-4.822c-.001-5.625-7.793-5.344-7.793-8.139 0-1.083.77-2.095 2.9-2.095 2.131 0 4.018 1.258 4.018 1.258l.14-3.706s-2.153-.588-4.576-.597z" />
    </svg>
  );
}
