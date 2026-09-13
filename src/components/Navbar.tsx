import logoText from '../assets/logo-text.png';
import hamburger from '../assets/hamburger.png';

export default function Navbar() {
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 py-4 container mx-auto px-4 lg:px-8">


      <div className="navbar-start w-1/4 lg:w-1/3">

        <div className="dropdown lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost pl-0 hover:bg-transparent focus:bg-transparent active:bg-transparent"
          >
            <img
              src={hamburger}
              alt="Menu"
              className="w-6 h-6 object-contain"
            />
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52 text-gray-600 font-medium"
          >
            <li>
              <a className="text-pink-600 font-semibold focus:bg-pink-50 focus:text-pink-600 active:bg-pink-100 active:text-pink-600">
                Home
              </a>
            </li>

            <li>
              <a className="hover:bg-pink-50 hover:text-pink-600 focus:bg-pink-50 focus:text-pink-600 active:bg-pink-100 active:text-pink-600">
                Technologies
              </a>
            </li>

            <li>
              <a className="hover:bg-pink-50 hover:text-pink-600 focus:bg-pink-50 focus:text-pink-600 active:bg-pink-100 active:text-pink-600">
                Projects
              </a>
            </li>

            <li>
              <a className="hover:bg-pink-50 hover:text-pink-600 focus:bg-pink-50 focus:text-pink-600 active:bg-pink-100 active:text-pink-600">
                About
              </a>
            </li>

            <li>
              <a className="hover:bg-pink-50 hover:text-pink-600 focus:bg-pink-50 focus:text-pink-600 active:bg-pink-100 active:text-pink-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <a className="hidden lg:flex items-center">
          <img
            src={logoText}
            alt="DevStack Logo"
            className="h-8 object-contain cursor-pointer"
          />
        </a>

      </div>

      <div className="navbar-center flex-1 justify-center lg:w-1/3">

        <a className="flex lg:hidden items-center">
          <img
            src={logoText}
            alt="DevStack Logo"
            className="h-8 object-contain cursor-pointer"
          />
        </a>

        <ul className="menu menu-horizontal px-1 gap-2 xl:gap-4 text-gray-600 font-medium hidden lg:flex">

          <li>
            <a className="text-pink-600 font-semibold hover:bg-transparent focus:bg-transparent active:bg-transparent hover:text-pink-600 focus:text-pink-600 active:text-pink-600 transition-colors">
              Home
            </a>
          </li>

          <li>
            <a className="hover:bg-transparent focus:bg-transparent active:bg-transparent hover:text-pink-600 focus:text-pink-600 active:text-pink-600 transition-colors">
              Technologies
            </a>
          </li>

          <li>
            <a className="hover:bg-transparent focus:bg-transparent active:bg-transparent hover:text-pink-600 focus:text-pink-600 active:text-pink-600 transition-colors">
              Projects
            </a>
          </li>

          <li>
            <a className="hover:bg-transparent focus:bg-transparent active:bg-transparent hover:text-pink-600 focus:text-pink-600 active:text-pink-600 transition-colors">
              About
            </a>
          </li>

          <li>
            <a className="hover:bg-transparent focus:bg-transparent active:bg-transparent hover:text-pink-600 focus:text-pink-600 active:text-pink-600 transition-colors">
              Contact
            </a>
          </li>

        </ul>
      </div>

      <div className="navbar-end w-auto lg:w-1/3 gap-2 sm:gap-4 justify-end flex-1">

        <a className="btn btn-ghost text-gray-600 font-medium hover:bg-transparent hover:text-gray-900 focus:bg-transparent active:bg-transparent px-2 sm:px-4">
          Sign In
        </a>

        <a className="btn brand-gradient text-white rounded-full px-4 sm:px-6 border-none hover:opacity-90 focus:opacity-90 active:scale-95 transition-all">
          Sign Up
        </a>

      </div>

    </div>
  );
}