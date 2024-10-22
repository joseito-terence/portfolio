import IconProps from "./types";

const NodejsIcon = ({ size = 24, fill = 'black', ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={fill}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M9 9v8.044a2 2 0 01-2.996 1.734l-1.568-.9A3 3 0 013 15.317V8.682a3 3 0 011.436-2.56l6-3.667a3 3 0 013.128 0l6 3.667A3 3 0 0121 8.683v6.634a3 3 0 01-1.436 2.56l-6 3.667a3 3 0 01-3.128 0" />
    <path d="M17 9h-3.5a1.5 1.5 0 000 3h2a1.5 1.5 0 010 3H12" />
  </svg>
);

export default NodejsIcon;
