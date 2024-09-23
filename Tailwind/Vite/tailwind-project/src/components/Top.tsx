import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import TopNavigation from "./TopNavigation";

export default function Top() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false); // mobile navigation menu
  const toggleMobileNavButton = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <div>
      {!mobileNavOpen ? (
        <div
          className={`${
            mobileNavOpen
              ? "translate-y-full opacity-0"
              : "translate-y-0 opacity-100"
          } flex flex-row-reverse items-center w-full p-2 md:p-4 lg:p-6 text-white bg-dark-blue`}
        >
          <AiOutlineMenu
            size={20}
            className="xl:hidden cursor-pointer"
            onClick={toggleMobileNavButton}
          />
        </div>
      ) : null}
      <div
        className={`${
          mobileNavOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        } flex flex-row-reverse items-start justify-between w-full fixed top-0 left-0 p-2 md:p-4 lg:p-6 bg-white text-black ease-in-out duration-300 transform transition-all`}
      >
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

      <TopNavigation />
    </div>
  );
}
