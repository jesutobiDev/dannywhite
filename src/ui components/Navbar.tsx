import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";

interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full text-lg fixed z-50 top-0 left-0 px-5 md:px-10 pt-10 pb-7 bg-white">
      <div className="flex justify-between items-center bg-white shadow-custom w-full h-20 px-5 rounded-2xl relative">
        <NavLink to="/">
          <p className="underline-magical logo font-semibold cursor-pointer text-2xl">
            Dan
          </p>
        </NavLink>
        {/* mobile toggle */}
        <RiMenu3Fill
          className="text-3xl md:hidden cursor-pointer"
          onClick={toggleMobileMenu}
        />
        {/* Render navigation items */}
        <ul className={`flex flex-col items-center md:flex-row gap-7 md:gap-3 absolute md:static top-24 h-fit left-0 w-full md:w-auto bg-white md:bg-transparent shadow-custom md:shadow-none rounded-2xl px-5 py-7 ${isMobileMenuOpen ? "flex" : "hidden md:flex"}`}>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `px-10 md:px-5 lg:px-10 py-3 ${
                    isActive
                      ? "bg-active/70 text-gray-100 rounded-full"
                      : "text-gray-500"
                  }`
                }
                onClick={toggleMobileMenu}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
