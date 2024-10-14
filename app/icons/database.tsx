import IconProps from "./types";

const DatabaseIcon = ({ size = 32, ...props }: IconProps) => (
  <svg
    fill="#000000"
    className="skill-svg"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    {...props}
  >
    <path d="M16,14c6.3,0,13-1.93,13-5.5v-3C29,1.93,22.3,0,16,0S3,1.93,3,5.5v3C3,12.07,9.7,14,16,14ZM5,5.5C5,4.07,9.29,2,16,2S27,4.07,27,5.5v3C27,9.93,22.71,12,16,12S5,9.93,5,8.5Z" />
    <path d="M16,32c6.3,0,13-1.93,13-5.5v-3a1,1,0,0,0-2,0v3c0,1.43-4.29,3.5-11,3.5S5,27.93,5,26.5v-3a1,1,0,0,0-2,0v3C3,30.07,9.7,32,16,32Z" />
    <path d="M16,23c6.3,0,13-1.93,13-5.5v-3a1,1,0,0,0-2,0v3c0,1.43-4.29,3.5-11,3.5S5,18.93,5,17.5v-3a1,1,0,0,0-2,0v3C3,21.07,9.7,23,16,23Z" />
  </svg>
);

export default DatabaseIcon;
