/* eslint-disable react/prop-types */
export default function SearchBox({ value, onSearch }) {
  return (
    <div className="flex items-center">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2_6)">
          <path
            d="M13.3333 22.6667C18.488 22.6667 22.6667 18.488 22.6667 13.3333C22.6667 8.17868 18.488 4 13.3333 4C8.17868 4 4 8.17868 4 13.3333C4 18.488 8.17868 22.6667 13.3333 22.6667Z"
            stroke="#151B32"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28 28L20 20"
            stroke="#151B32"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_6">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <input
        className="border rounded px-4 py-2 ml-2  w-full"
        type="text"
        placeholder="Search user by name"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
