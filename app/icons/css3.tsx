import IconProps from "./types";

const Css3Icon = ({ size = 50, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    className="skill-svg"
    fillRule="evenodd"
    fill="#1A1A1A"
    height={size}
    width={size}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M39 40 25 44 11 40 8 6l34 0c-1 11.332031-2 22.667969-3 34zM39.816406 8H10.183594l2.6875 30.453125L25 41.921875l12.128906-3.46875zM16.800781 28h4l.097657 2.5L25 31.898438l4.101563-1.398438.296875-4.5h-8.796875l-.203125-4h9.203125l.296875-4H16.101563L15.800781 14h18.300781l-.5 8-.703125 11.5L25 36.101563l-7.898437-2.601563z"
    />
  </svg>
);

export default Css3Icon;
