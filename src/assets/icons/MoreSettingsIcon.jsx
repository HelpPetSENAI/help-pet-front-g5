const MoreSettingsIcon = ({ active = false, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={47}
    height={47}
    fill="none"
    {...props}
  >
    {active ? (
      <g filter="url(#a)">
        <path
          fill="#fff"
          d="M23.5 46C35.926 46 46 35.926 46 23.5S35.926 1 23.5 1 1 11.074 1 23.5 11.074 46 23.5 46Z"
        />
        <path
          stroke="#061407"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M23.5 14.5v18m-9-9h18m13.5 0C46 35.926 35.926 46 23.5 46S1 35.926 1 23.5 11.074 1 23.5 1 46 11.074 46 23.5Z"
        />
      </g>
    ) : (
      <>
        <path
          fill="#39C442"
          d="M23.5 46C35.926 46 46 35.926 46 23.5S35.926 1 23.5 1 1 11.074 1 23.5 11.074 46 23.5 46Z"
        />
        <path
          stroke="#061407"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M23.5 14.5v18m-9-9h18m13.5 0C46 35.926 35.926 46 23.5 46S1 35.926 1 23.5 11.074 1 23.5 1 46 11.074 46 23.5Z"
        />
      </>
    )}

    {active && (
      <defs>
        <filter
          id="a"
          width={49}
          height={49}
          x={0}
          y={0}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={2} dy={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.0235294 0 0 0 0 0.0784314 0 0 0 0 0.027451 0 0 0 1 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1793_727" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1793_727" result="shape" />
        </filter>
      </defs>
    )}
  </svg>
)

export default MoreSettingsIcon
