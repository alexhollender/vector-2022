interface IconProps {
  color?: string;
}

export const ExpandCollapseTocSection = ({
  color = "var(--color-text-base)",
}: IconProps) => {
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

export const Down = ({ color = "var(--color-text-base)" }: IconProps) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m11.05 3.996-.965-1.053-4.035 3.86-3.947-3.86L1.05 3.996l5 5z"
        fill={color}
      />
    </svg>
  );
};

export const Dots = ({ color = "var(--color-text-base)" }: IconProps) => {
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

export const Contents = ({ color = "var(--color-text-base)" }: IconProps) => {
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

export const Menu = ({ color = "var(--color-text-base)" }: IconProps) => {
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

export const Language = ({ color = "var(--color-text-base)" }: IconProps) => {
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

export const Appearance = ({ color = "var(--color-text-base)" }: IconProps) => {
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

export const Search = ({ color = "var(--color-text-base)" }: IconProps) => {
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

export const Image = ({ color = "var(--color-text-base)" }: IconProps) => {
  return (
    <svg
      width="100%"
      height="100%"
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

export const Bell = ({ color = "var(--color-text-base)" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
    >
      <title>bell</title>
      <g fill={color}>
        <path d="M16 7a5.38 5.38 0 0 0-4.46-4.85C11.6 1.46 11.53 0 10 0S8.4 1.46 8.46 2.15A5.38 5.38 0 0 0 4 7v6l-2 2v1h16v-1l-2-2zm-6 13a3 3 0 0 0 3-3H7a3 3 0 0 0 3 3" />
      </g>
    </svg>
  );
};

export const Inbox = ({ color = "var(--color-text-base)" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
    >
      <title>inbox</title>
      <g fill={color}>
        <path d="M3 1a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm14 12h-4l-1 2H8l-1-2H3V3h14z" />
      </g>
    </svg>
  );
};

export const Watchlist = ({ color = "var(--color-text-base)" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
    >
      <title>watchlist</title>
      <g fill={color}>
        <path d="M1 3h16v2H1Zm0 6h6v2H1Zm0 6h8v2H1Zm8-4.24h3.85L14.5 7l1.65 3.76H20l-3 3.17.9 4.05-3.4-2.14L11.1 18l.9-4.05Z" />
      </g>
    </svg>
  );
};

export const User = ({ color = "var(--color-text-base)" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
    >
      <title>user</title>
      <g fill={color}>
        <path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5" />
        <circle cx="10" cy="5.5" r="4.5" />
      </g>
    </svg>
  );
};

export const UserTalk = ({ color = "var(--color-text-base)" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
    >
      <title>user talk</title>
      <g fill={color}>
        <path d="M18 0H2a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-4 4a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 14 4M6 4a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 6 4m4 8c-2.61 0-4.83-.67-5.65-3h11.3c-.82 2.33-3.04 3-5.65 3" />
      </g>
    </svg>
  );
};

export const Sandbox = ({ color = "var(--color-text-base)" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
    >
      <title>sandbox</title>
      <g fill={color}>
        <path d="M8 12V9l6-6 3 3-6 6zm10-7-3-3 2-2 3 3zM8 2h2v2H8zM4 2h2v2H4zM0 3a1 1 0 0 1 1-1h1v2H0zm0 3h2v2H0zm0 4h2v2H0zm0 4h2v2H0zm0 4h2v2H1a1 1 0 0 1-1-1zm4 0h2v2H4zm4 0h2v2H8zm4 0h2v1a1 1 0 0 1-1 1h-1zm0-4h2v2h-2z" />
      </g>
    </svg>
  );
};

export const Settings = ({ color = "var(--color-text-base)" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width="100%"
    height="100%"
    fill={color}
  >
    <title>settings</title>
    <path d="M8.5 0h3l1 6.5h-5m0 7h5l-1 6.5h-3" />
    <path d="M8.5 0h3l1 6.5h-5m0 7h5l-1 6.5h-3" transform="rotate(45 10 10)" />
    <path d="M8.5 0h3l1 6.5h-5m0 7h5l-1 6.5h-3" transform="rotate(90 10 10)" />
    <path d="M8.5 0h3l1 6.5h-5m0 7h5l-1 6.5h-3" transform="rotate(135 10 10)" />
    <path d="M10 2.5a7.5 7.5 0 0 0 0 15 7.5 7.5 0 0 0 0-15v4a3.5 3.5 0 0 1 0 7 3.5 3.5 0 0 1 0-7" />
  </svg>
);

export const Beta = ({ color = "var(--color-text-base)" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
    >
      <title>beta</title>
      <g fill={color}>
        <path d="M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 0 0 2 19h16a1 1 0 0 0 .86-1.51zm-4.2.88a1 1 0 0 0 .2-.6V3h2v4.89a1 1 0 0 0 .14.51l2.14 3.6H6.72z" />
      </g>
    </svg>
  );
};

export const Contributions = ({
  color = "var(--color-text-base)",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
    >
      <title>contributions</title>
      <g fill={color}>
        <circle cx="15.5" cy="10.5" r="2.5" />
        <path d="M1 15h8v2H1Zm0-6h10v2H1Zm0-6h16v2H1Zm14.5 10.6c-3.3 0-4.5 1.6-4.5 2.7V18h9v-1.7c0-1-1.2-2.7-4.5-2.7" />
      </g>
    </svg>
  );
};

export const Media = ({ color = "var(--color-text-base)" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
    >
      <title>media</title>
      <g fill={color}>
        <path d="M3 5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2zm0 11 3.5-4.5 2.5 3 3.5-4.5 4.5 6zM16 2a2 2 0 012 2H2a2 2 0 012-2z" />
      </g>
    </svg>
  );
};

export const Logout = ({ color = "var(--color-text-base)" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
    >
      <title>log out</title>
      <g fill={color}>
        <path d="M3 3h8V1H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v-2H3z" />
        <path d="M13 5v4H5v2h8v4l6-5z" />
      </g>
    </svg>
  );
};

export const Talk = ({ color = "var(--color-text-base)" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
    >
      <title>talk</title>
      <g fill={color}>
        <path d="M17 4v7a2 2 0 0 1-2 2H4v1a2 2 0 0 0 2 2h10l4 4V6a2 2 0 0 0-2-2zM6 10H0v6z" />
        <rect width="16" height="12" rx="2" />
      </g>
    </svg>
  );
};

export const History = ({ color = "var(--color-text-base)" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
    >
      <title>history</title>
      <g fill={color}>
        <path d="M9 6v5h.06l2.48 2.47 1.41-1.41L11 10.11V6z" />
        <path d="M10 1a9 9 0 0 0-7.85 13.35L.5 16H6v-5.5l-2.38 2.38A7 7 0 1 1 10 17v2a9 9 0 0 0 0-18" />
      </g>
    </svg>
  );
};

export const Watch = ({ color = "var(--color-text-base)" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
    >
      <title>watch</title>
      <g fill={color}>
        <path d="M20 7h-7L10 .5 7 7H0l5.46 5.47-1.64 7 6.18-3.7 6.18 3.73-1.63-7zm-10 6.9-3.76 2.27 1-4.28L3.5 8.5h4.61L10 4.6l1.9 3.9h4.6l-3.73 3.4 1 4.28z" />
      </g>
    </svg>
  );
};

export const Edit = ({ color = "var(--color-text-base)" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
    >
      <title>edit</title>
      <g fill={color}>
        <path d="m16.77 8 1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z" />
      </g>
    </svg>
  );
};

export const Wikitext = ({ color = "var(--color-text-base)" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
    >
      <title>wikitext</title>
      <g fill={color}>
        <path d="M1 3v14h3v-2H3V5h1V3zm4 0v14h4v-2H7V5h2V3zm11 0v2h1v10h-1v2h3V3zm-5 0v2h2v10h-2v2h4V3z" />
      </g>
    </svg>
  );
};
