import { useState } from "react";

const languages = [
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

const currencies = [{ code: "USD" }, { code: "Euro" }, { code: "Rupees" }];

export default function Top() {
  const [language, setLanguage] = useState("ENG");
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [currencyDropdown, setCurrencyDropdown] = useState(false);
  const toggleDropdown = (dropDown: string) => {
    if (dropDown === "currency") {
      setCurrencyDropdown(!currencyDropdown);
    } else if (dropDown === "language") {
      setLanguageDropdown(!languageDropdown);
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
          <li className="flex justify-center items-center ml-4 gap-1">
            <span>Language:</span>
            <span className="flex justify-center gap-1">
              <span
                className="cursor-pointer uppercase"
                onClick={() => toggleDropdown("language")}
              >
                {language}
              </span>
              {languageDropdown ? (
                <div className="flex flex-col gap-4 items-start bg-white w-1/2 absolute top-10 left-0 pl-8 py-4 ease-in-out duration-500 opacity-100">
                  {languages
                    .filter((x) => x.code !== language)
                    .map((language) => (
                      <div className="flex gap-3 justify-center" key={language.code}>
                        <img
                          src={language.flag}
                          alt={`${language.code}-flag`}
                        />
                        <span
                          className="cursor-pointer text-gray-700"
                          onClick={() => {
                            setLanguage(language.code);
                            setLanguageDropdown(false);
                          }}
                        >
                          {language.code}
                        </span>
                      </div>
                    ))}
                </div>
              ) : <div className="flex flex-col gap-4 items-start bg-white w-1/2 absolute top-16 left-0 pl-8 py-4 ease-in-out duration-500 opacity-0">
              {languages
                .filter((x) => x.code !== language)
                .map((language) => (
                  <div className="flex gap-3 justify-center" key={language.code}>
                    <img
                      src={language.flag}
                      alt={`${language.code}-flag`}
                    />
                    <span
                      className="cursor-pointer text-gray-700"
                      onClick={() => {
                        setLanguage(language.code);
                        setLanguageDropdown(false);
                      }}
                    >
                      {language.code}
                    </span>
                  </div>
                ))}
            </div>}
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
          <li className="flex justify-center items-center ml-4 gap-1">
            <span>Currency:</span>
            <span className="flex justify-center gap-1 uppercase">
              <span className="cursor-pointer uppercase">USD</span>
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
          <li className="ml-4 cursor-pointer">Login</li>
        </ul>
      </nav>
    </div>
  );
}
