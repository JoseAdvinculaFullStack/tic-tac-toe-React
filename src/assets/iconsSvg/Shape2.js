import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31.557 5.29 26.71.443a1.513 1.513 0 0 0-2.139 0L16 9.014 7.429.444a1.513 1.513 0 0 0-2.14 0L.444 5.29c-.59.59-.59 1.548 0 2.139L9.014 16l-8.57 8.571c-.592.59-.592 1.548 0 2.14l4.846 4.846c.59.59 1.548.59 2.139 0L16 22.986l8.571 8.57c.59.592 1.548.592 2.14 0l4.846-4.846c.59-.59.59-1.548 0-2.139L22.986 16l8.57-8.571c.592-.59.592-1.549 0-2.14Z"
      fill={props.fill}
    />
  </svg>
);

export default SvgComponent;
