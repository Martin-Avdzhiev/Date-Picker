import React from "react";

type DropdownProps = {
  label: string;
  selected: string;
  options: Array<{ code: string; flag?: string }>;
  onSelect: (code: string) => void;
  dropdownOpen: boolean;
  toggleDropdown: () => void;
};

const Dropdown: React.FC<DropdownProps> = ({
  label,
  selected,
  options,
  onSelect,
  dropdownOpen,
  toggleDropdown,
}) => {
  return (
    <li className="flex justify-center items-center ml-4 gap-1">
      <span>{label}:</span>
      <span className="flex justify-center gap-1 uppercase">
        <span className="cursor-pointer" onClick={toggleDropdown}>
          {selected}
        </span>
        {dropdownOpen ? (
          <div className={`flex flex-col gap-4 items-start bg-white w-1/2 absolute top-10 left-${label == "Language" ? 0 : 32} pl-8 py-4 ease-in-out duration-500 opacity-100`}>
            {options
              .filter((x) => x.code !== selected)
              .map((option) => (
                <div
                  className="flex gap-3 justify-center"
                  key={option.code}
                  onClick={() => {
                    onSelect(option.code);
                    toggleDropdown();
                  }}
                >
                  {option.flag && (
                    <img src={option.flag} alt={`${option.code}-flag`} />
                  )}
                  <span className="cursor-pointer text-gray-700">
                    {option.code}
                  </span>
                </div>
              ))}
          </div>
        ) : (
          <div className={`flex flex-col gap-4 items-start bg-white w-1/2 absolute top-10 left-${label == "Language" ? 0 : 32} pl-8 py-4 ease-in-out duration-500 opacity-0`}>
            {options
              .filter((x) => x.code !== selected)
              .map((option) => (
                <div
                  className="flex gap-3 justify-center"
                  key={option.code}
                  onClick={() => {
                    onSelect(option.code);
                    toggleDropdown();
                  }}
                >
                  {option.flag && (
                    <img src={option.flag} alt={`${option.code}-flag`} />
                  )}
                  <span className="cursor-pointer text-gray-700">
                    {option.code}
                  </span>
                </div>
              ))}
          </div>
        )}
        <svg
          className="w-3 pt-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="white"
            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
          />
        </svg>
      </span>
    </li>
  );
};

export default Dropdown;
