import IconProps from "./types";

const TamaguiIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    className="tamagui-icon"
    viewBox="0 0 424 394"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        d="M310.786 30v28.75H372.5l-.001 28.75H426.5v86.25h-54.001l.001 28.75h-61.714v115h-28.929V375h-202.5v-57.5H21.5v-230h57.857V30h231.429Z"
        opacity={0.267}
      />
      <g fill={props.fill ?? "#1A1A1A"}>
        <path d="M279.5 0h-20v20h20zm-28.8 0h-20v20h20zm-28.8 0h-20v20h20zm-28.8 0h-20v20h20zm-28.8 0h-20v20h20zm-28.8 0h-20v20h20zm-28.8 28.714h-20v20h20zM77.9 57.429h-20v20h20zM49.1 86.143h-20v20h20zm0 28.714h-20v20h20zm0 28.714h-20v20h20zm0 28.715h-20v20h20zM20.3 201H.3v20h20zm0 28.714H.3v20h20zm0 28.715H.3v20h20zm28.8 28.714h-20v20h20zm28.8 28.714h-20v20h20zm28.8 28.714h-20v20h20zm28.8 28.715h-20v20h20zm28.8 0h-20v20h20zm28.8-28.715h-20v20h20zm28.8 0h-20v20h20zm0 28.715h-20v20h20zm28.8 0h-20v20h20zm28.8-28.715h-20v20h20zm0-28.714h-20v20h20zm28.8-28.714h-20v20h20zm28.8-57.429h-20v20h20zm0 28.715h-20v20h20zm0-57.429h-20v20h20zm28.8-28.714h-20v20h20zm28.8 0h-20v20h20zm28.8-28.715h-20v20h20zm-28.8-28.714h-20v20h20zm-28.8 0h-20v20h20zm-28.8 0h-20v20h20zm86.4-28.714h-20v20h20zm0 28.714h-20v20h20zm-28.8-57.428h-20v20h20z" />
        <path d="M394.7 57.429h-20v20h20zm-28.8 0h-20v20h20zm-57.6-28.715h-20v20h20zm-28.8 28.715h-20v20h20zm-86.4 28.714h-20v20h20zm0 114.857h-20v20h20zm0 28.714h-20v20h20zm-28.8 28.715h-20v20h20zm-28.8-28.715h-20v20h20zm0-28.714h-20v20h20zM337.1 57.429h-20v20h20z" />
      </g>
    </g>
  </svg>
);

export default TamaguiIcon;
