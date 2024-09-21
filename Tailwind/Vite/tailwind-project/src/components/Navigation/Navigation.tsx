export default function Navigation() {
  return (
    <div className="flex px-6 md:px-12 lg:px-20 xl:px-30 2xl:px-40 py-4 bg-dark-blue text-white">
      <nav className="flex justify-between items-center w-full">
        <p className="text-gray-300">
          Need help?{" "}
          <span className="text-yellow-400 cursor-pointer">
            Send us a ticket.
          </span>
        </p>
        <ul className="flex items-center">
          <li className="ml-4">
            <img
              src="https://kereta.madrasthemes.com/wp-content/themes/kereta/assets/images/eng.svg"
              alt="uk-flag"
            />
          </li>
          <li className="flex justify-center items-center ml-4 gap-1">
            <span>Language:</span>
            <span className="flex justify-center gap-1">
              <span className="cursor-pointer uppercase">Eng</span>
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
