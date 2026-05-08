import * as React from "react";

const MoreSettingsIcon = ({ active, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={47}
    height={47}
    fill={active ? "#fff" : "#39C442"} // fill aplicado no svg
    style={{
      filter: active
        ? "drop-shadow(2px 2px 0 var(--green-1000, #061407))"
        : "none",
    }}
    {...props}
  >
    <path
      d="M23.5 46C35.926 46 46 35.926 46 23.5S35.926 1 23.5 1 1 11.074 1 23.5 11.074 46 23.5 46Z"
    />
    <path
      stroke="#061407"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M23.5 14.5v18m-9-9h18m13.5 0C46 35.926 35.926 46 23.5 46S1 35.926 1 23.5 11.074 1 23.5 1 46 11.074 46 23.5Z"
    />
  </svg>
);

export default MoreSettingsIcon;
