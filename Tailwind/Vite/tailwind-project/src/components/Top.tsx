import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import Dropdown from "./Dropdown";

import { languages, currencies } from "../db";

export default function Top() {
  const [language, setLanguage] = useState("ENG");
  const [languageDropdown, setLanguageDropdown] = useState(false); // language dropdown
  const [currency, setCurrency] = useState("USD");
  const [currencyDropdown, setCurrencyDropdown] = useState(false); //currency dropdown
  const [mobileNavOpen, setMobileNavOpen] = useState(false); // mobile navigation menu

  // toggle dropdown function to open or close the dropdowns when clicked on the dropdown label
  const toggleDropdown = (dropdown: "language" | "currency") => {
    if (dropdown === "currency") {
      setCurrencyDropdown(!currencyDropdown);
      setLanguageDropdown(false);
    } else if (dropdown === "language") {
      setLanguageDropdown(!languageDropdown);
      setCurrencyDropdown(false);
    }
  };

  const toggleMobileNavButton = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <div className="flex justify-end xl:justify-start p-4 md:p-6 lg:p-8 xl:px-32 2xl:px-40 bg-dark-blue text-white">
      {!mobileNavOpen && (
        <AiOutlineMenu
          size={20}
          className="xl:hidden cursor-pointer"
          onClick={toggleMobileNavButton}
        />
      )}
      {mobileNavOpen ? (
        <div className="flex flex-row-reverse justify-between absolute top-0 left-0 w-full h-full bg-white xl:hidden p-4 md:p-6 lg:p-8 text-gray-700 opacity-100 ease-in-out duration-500">
          <AiOutlineClose
            size={20}
            className="xl:hidden cursor-pointer"
            onClick={toggleMobileNavButton}
          />
          <ul className="flex flex-col gap-1 px-2 font-bold">
            <li>Home</li>
            <li>Pages</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      ) : (
        <div className="absolute top-28 left-0 oppacity-0 p-4 md:p-6 lg:p-8">

        </div>
      )}
      <nav className="hidden xl:flex justify-between items-center w-full ">
        <p className="text-gray-300">
          Need help?{" "}
          <span className="text-yellow-400 cursor-pointer">
            Send us a ticket.
          </span>
        </p>
        <ul className="flex items-center relative">
          <li className="ml-4">
            <img
              src={languages.filter((x) => x.code === language)[0].flag}
              alt={`${languages.filter((x) => x.code === language)[0].code}-flag`}
            />
          </li>
          {/* Language Dropdown */}
          <Dropdown
            label="Language"
            selected={language}
            options={languages}
            onSelect={setLanguage}
            dropdownOpen={languageDropdown}
            toggleDropdown={() => toggleDropdown("language")}
          />
          {/* Currency Dropdown */}
          <Dropdown
            label="Currency"
            selected={currency}
            options={currencies}
            onSelect={setCurrency}
            dropdownOpen={currencyDropdown}
            toggleDropdown={() => toggleDropdown("currency")}
          />
          <li className="ml-4 cursor-pointer">Login</li>
        </ul>
      </nav>
    </div>
  );
}
