import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Products",
      path: "/products",
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav className="bg-purple-900">
      <div onClick={() => setOpen(!open)} className="md:hidden px-4">
        {/* <span>{open === true ? 'open' : 'close'}</span> */}
        <span>
          {open === true ? (
            <XMarkIcon className="h-6 w-6 text-purple-500" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" />
          )}
        </span>
        {/* <Bars3Icon className="h-6 w-6 text-purple-500" /> */}
      </div>

      <ul
        className={`md:flex duration-500 pl-4 pb-4 py-2 bg-purple-500 absolute md:static ${
          open ? "top-6" : "-top-36"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
