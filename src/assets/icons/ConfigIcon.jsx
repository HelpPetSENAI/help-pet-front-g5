import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#061407"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 4h12m0 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm-6 8h12M7 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
)
export default SvgComponent
