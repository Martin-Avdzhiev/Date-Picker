import { useState } from "react";
import { languagesType, currenciesType } from "./Types";
import Dropdown from "./Dropdown";
const languages: languagesType[] = [
  {
    code: "ENG",
    flag: "https://kereta.madrasthemes.com/wp-content/themes/kereta/assets/images/eng.svg",
  },
  {
    code: "POR",
    flag: "https://kereta.madrasthemes.com/wp-content/uploads/2023/07/por.svg",
  },
  {
    code: "DUT",
    flag: "https://kereta.madrasthemes.com/wp-content/uploads/2023/07/duch.svg",
  },
];

const currencies: currenciesType[] = [
  { code: "USD" },
  { code: "Euro" },
  { code: "Rupees" },
];

export default function Top() {
  const [language, setLanguage] = useState("ENG");
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [currencyDropdown, setCurrencyDropdown] = useState(false);
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
    <div className="flex px-6 md:px-12 lg:px-20 xl:px-30 2xl:px-40 py-4 bg-dark-blue text-white">
      <nav className="flex justify-between items-center w-full">
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
              alt="uk-flag"
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
