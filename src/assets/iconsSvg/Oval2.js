import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={32}
    height={32}
    fill="#1A2A33"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31.741 15.87C31.741 7.107 24.636 0 15.871 0 7.106 0 0 7.106 0 15.87c0 8.766 7.106 15.871 15.87 15.871 8.766 0 15.871-7.105 15.871-15.87Zm-22.336 0a6.466 6.466 0 1 1 12.931 0 6.466 6.466 0 0 1-12.931 0Z"
    />
  </svg>
);

export default SvgComponent;
