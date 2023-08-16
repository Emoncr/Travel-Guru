import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import logo from "../../images/Group 1330.png";

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="large"
        color="white"
        className="p-1 font-normal cursor-pointer"
      >
        News
      </Typography>

      <Typography
        as="li"
        variant="large"
        color="white"
        className="p-1 font-normal cursor-pointer"
      >
        Destination
      </Typography>
      <Typography
        as="li"
        variant="large"
        color="white"
        className="p-1 font-normal cursor-pointer"
      >
        Blog
      </Typography>
      <Typography
        as="li"
        variant="large"
        color="white"
        className="p-1 font-normal cursor-pointer"
      >
        Contact
      </Typography>
    </ul>
  );

  return (
    <Navbar className="2xl:container lg:max-w-full lg:px-10 !backdrop-blur-0 mx-auto max-w-screen-xl py-2 px-4  lg:py-4 bg-transparent rounded-none border-none  shadow-none">
      <div className="container mx-auto flex items-center justify-between text-white-900">
        <img src={logo} alt="logo" />
        <div className="hidden lg:block">{navList}</div>
        <Button
          color="amber"
          variant="gradient"
          size="md"
          className="hidden lg:inline-block "
        >
          <span>Login</span>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button
            color="amber"
            variant="gradient"
            size="sm"
            fullWidth
            className="mb-2"
          >
            <span>Login</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default Header;
