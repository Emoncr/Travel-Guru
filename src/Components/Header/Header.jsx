import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Collapse ,
} from "@material-tailwind/react";

import logo from "../../images/Group 1330.png";
import logoBlack from "../../images/logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const [isRouteChange, setRouteChange] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname != "/") {
      setRouteChange(!isRouteChange);
    }
  }, [pathname]);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul
      className={`mb-4 mt-2 flex flex-col  ${
        isRouteChange ? "text-black" : "text-white"
      } gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 `}
    >
      <Link to={"/"}>
        <Typography
          as="li"
          variant="paragraph"
          className="p-1 font-normal cursor-pointer font-display"
        >
          Home
        </Typography>
      </Link>

      <Typography
        as="li"
        variant="paragraph"
        className="p-1 font-normal cursor-pointer  font-display"
      >
        Destination
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        className="p-1 font-normal cursor-pointer  font-display"
      >
        Blog
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        className="p-1 font-normal cursor-pointer font-display"
      >
        Contact
      </Typography>
    </ul>
  );

  return (
    <Navbar className="2xl:container lg:max-w-full lg:px-10 !backdrop-blur-0 mx-auto max-w-screen-xl py-2 px-4  lg:py-4 bg-transparent rounded-none border-none  shadow-none ">
      <div className="containe mx-auto flex items-center justify-between text-white-900">
        <Link to={"/"}>
          {isRouteChange ? (
            <img className="w-20 lg:32" src={logoBlack} alt="logo" />
          ) : (
            <img className="w-20 lg:32" src={logo} alt="logo" />
          )}
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <Link to={"/login"}>
          <Button
            color="amber"
            variant="gradient"
            size="md"
            className="hidden lg:inline-block font-display"
          >
            <span>Login</span>
          </Button>
        </Link>

        <IconButton
          variant="text"
          className={`ml-auto h-6 w-6   text-inherit ${
            isRouteChange ? "text-yellow" : ""
          }  hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden`}
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Link to={"/login"}>
            <Button
              color="amber"
              variant="gradient"
              size="sm"
              fullWidth
              className="mb-2 font-display"
            >
              <span>Login</span>
            </Button>
          </Link>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Header;
