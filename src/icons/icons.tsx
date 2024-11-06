export const ExpandCollapseTocSection = ({ color = "black" }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 1.50039L7.5 6.00039L3 10.5004L3.9 11.4004L9.3 6.00039L3.9 0.600391L3 1.50039Z"
        fill={color}
      />
    </svg>
  );
};

export const Dots = ({ color = "black" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
    >
      <title>ellipsis</title>
      <g fill={color}>
        <circle cx="10" cy="10" r="2" />
        <circle cx="3" cy="10" r="2" />
        <circle cx="17" cy="10" r="2" />
      </g>
    </svg>
  );
};

export const Contents = ({ color = "black" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
    >
      <title>bullet list</title>
      <g fill={color}>
        <path d="M7 15h12v2H7zm0-6h12v2H7zm0-6h12v2H7z" />
        <circle cx="3" cy="4" r="2" />
        <circle cx="3" cy="10" r="2" />
        <circle cx="3" cy="16" r="2" />
      </g>
    </svg>
  );
};

export const Menu = ({ color = "black" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
    >
      <title>menu</title>
      <g fill={color}>
        <path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z" />
      </g>
    </svg>
  );
};

export const Language = ({ color = "black" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
    >
      <title>language</title>
      <g fill={color}>
        <path d="M20 18h-1.44a.6.6 0 0 1-.4-.12.8.8 0 0 1-.23-.31L17 15h-5l-1 2.54a.8.8 0 0 1-.22.3.6.6 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.2 17.2 0 0 1-5 2.1q.56.82.87 1.38a23.3 23.3 0 0 0 5.22-2.51 15.6 15.6 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 0 1-2.45 4.45 9.1 9.1 0 0 1-2.46-4.45" />
      </g>
    </svg>
  );
};

export const Appearance = ({ color = "black" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
    >
      <title>appearance</title>
      <g fill={color}>
        <path d="M1.2 9a4.25 4.25 0 0 1 7.9-.6 2.8 2.8 0 0 1 1.8 0 4.25 4.25 0 0 1 7.9.6 1.01 1.01 0 1 1 .1 2 4.23 4.23 0 0 1-8.4-.6 1 1 0 0 0-1 0 4.23 4.23 0 0 1-8.4.6 1.01 1.01 0 1 1 .1-2m4.05-1a2.25 2.25 0 0 0 0 4.5 2.25 2.25 0 0 0 0-4.5m9.5 0a2.25 2.25 0 0 0 0 4.5 2.25 2.25 0 0 0 0-4.5" />
      </g>
    </svg>
  );
};

export const Search = ({ color = "black" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
    >
      <path
        fill={color}
        d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"
      />
    </svg>
  );
};

export const Image = ({ color = "black" }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 2H2C0.89543 2 0 2.89543 0 4V16C0 17.1046 0.89543 18 2 18H18C19.1046 18 20 17.1046 20 16V4C20 2.89543 19.1046 2 18 2ZM1.83 15L5.92 9.75L8.84 13.26L12.92 8L18.17 15H1.83Z"
        fill={color}
      />
    </svg>
  );
};
