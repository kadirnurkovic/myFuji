import Logo from "../../img/fuji-logo.png";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer class="p-4 bg-dark shadow md:px-10 md:py-4 dark:bg-gray-900">
      <div class="sm:flex sm:items-center sm:justify-center">
        <div className="flex items-center mb-4 sm:mb-0 mr-20">
          <img
            src={Logo}
            alt=""
            className="flex items-center mb-4 sm:mb-0 h-10"
          />
          <span className="self-center text-3xl font-semibold whitespace-nowrap text-white">
            Fuji
          </span>
        </div>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <NavLink to="/" className="mr-4 hover:underline md:mr-6 text-white">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/anime"
              className="mr-4 hover:underline md:mr-6 text-white"
            >
              Anime
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/manga"
              className="mr-4 hover:underline md:mr-6 text-white"
            >
              Manga
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="mr-4 hover:underline md:mr-6 text-white"
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-logored sm:mx-auto dark:border-logored lg:my-8" />
      <span class="block text-sm text-white sm:text-center">
        © 2022{" "}
        <a href="https://flowbite.com/" class="hover:underline text-white">
          Flowbite™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
