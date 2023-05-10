import * as React from "react";

export function ArticleIcon({ fill = "#6C7281", ...rest }) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M19 5v14H5V5h14zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
        fill={fill}
      />
      <path d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill={fill} />
    </svg>
  );
}

export function CollapsIcon({ fill = "#6C7281", ...rest }) {
  return (
    <svg
      width={16}
      height={15}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M8.901 1.768L7.134 0 0 7.134l7.134 7.133L8.9 12.5 3.535 7.134l5.366-5.367z"
        fill={fill}
      />
      <path
        d="M13.384 0L6.25 7.134l7.134 7.133L15.15 12.5 9.785 7.134l5.366-5.367L13.384 0z"
        fill={fill}
      />
    </svg>
  );
}

export function HomeIcon({ fill = "#6C7281", ...rest }) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1.001 1.001 0 00.707-1.707l-9-9a1 1 0 00-1.414 0l-9 9A1 1 0 003 13zm7 7v-5h4v5h-4zm2-15.586l6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"
        fill={fill}
      />
    </svg>
  );
}

export function Logo({ fill = "#3B81F6", ...rest }) {
  return (
    <svg
      width={40}
      height={40}
      fill="none"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M22.5 32.5h10V35h-10v-2.5zm0-5h15V30h-15v-2.5zm0-5h15V25h-15v-2.5z"
        fill={fill}
      />
      <path
        d="M25.686 14.021L20 2.5l-5.686 11.521L1.6 15.87l9.2 8.968L8.628 37.5l8.872-4.664v-2.825L11.95 32.93l1.315-7.67.222-1.296-.94-.916-5.573-5.434 7.7-1.119 1.3-.189.583-1.179L20 8.15l3.444 6.979.582 1.178 1.3.189 9.318 1.356.356-2.476-9.314-1.354z"
        fill={fill}
      />
    </svg>
  );
}

export function LogoutIcon({ fill = "#6C7281", ...rest }) {
  return (
    <svg
      width={16}
      height={19}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M8 19c4.411 0 8-3.589 8-8 0-3.35-2.072-6.22-5-7.41v2.222A6 6 0 0114 11c0 3.31-2.691 6-6 6s-6-2.69-6-6a5.999 5.999 0 013-5.188V3.59C2.072 4.78 0 7.65 0 11c0 4.411 3.589 8 8 8z"
        fill={fill}
      />
      <path d="M7 0h2v10H7V0z" fill={fill} />
    </svg>
  );
}


export function UsersIcon({ stroke = "#6C7281", ...rest }) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M12 4.354a4 4 0 110 5.292V4.354zM15 21H3v-1a6 6 0 1112 0v1zm0 0h6v-1a6 6 0 00-9-5.197L15 21zM13 7a4 4 0 11-8 0 4 4 0 018 0v0z"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function VideosIcon({ fill = "#6C7281", ...rest }) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M4 8H2v12a2 2 0 002 2h12v-2H4V8z" fill={fill} />
      <path
        d="M20 2H8a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zm-9 12V6l7 4-7 4z"
        fill={fill}
      />
    </svg>
  );
}

