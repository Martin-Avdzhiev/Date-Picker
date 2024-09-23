import { useState } from "react";

import Dropdown from "./Dropdown";

import { languages, currencies } from "../db";

export default function TopNavigation() {
  const [language, setLanguage] = useState("ENG");
  const [languageDropdown, setLanguageDropdown] = useState(false); // language dropdown
  const [currency, setCurrency] = useState("USD");
  const [currencyDropdown, setCurrencyDropdown] = useState(false); //currency dropdown

  const toggleDropdown = (dropdown: "language" | "currency") => {
    if (dropdown === "currency") {
      setCurrencyDropdown(!currencyDropdown);
      setLanguageDropdown(false);
    } else if (dropdown === "language") {
      setLanguageDropdown(!languageDropdown);
      setCurrencyDropdown(false);
    }
  };
  
  return (
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
  )
}
