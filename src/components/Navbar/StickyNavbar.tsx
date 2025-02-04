import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
  List,
} from "@material-tailwind/react";
import searchIcon from "../../assets/search-icon.svg";
import { Link } from "react-router-dom";
import NavBarItem from "./NavBarItem";
import { useMediaQuery } from "../../services/hooks/useMediaQuery";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 719px)");

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <List className="mt-2 mb-4 flex flex-col gap-6 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <NavBarItem
        onclick={() => setOpenNav(isMobile && !openNav)}
        pathName="/Breakfast"
        name="Petit Déjeuner"
      />
      <NavBarItem
        onclick={() => setOpenNav(isMobile && !openNav)}
        pathName="/Lunch"
        name="Déjeuner"
      />
      <NavBarItem
        onclick={() => setOpenNav(isMobile && !openNav)}
        pathName="/Dinner"
        name="Diner"
      />
      <NavBarItem
        onclick={() => setOpenNav(isMobile && !openNav)}
        pathName="/Aperitif"
        name="Apero"
      />
    </List>
  );

  return (
    <Navbar
      className={`${
        openNav ? "flex flex-col h-screen" : "h-max"
      } sticky top-0 z-10  max-w-full rounded-none px-0 py-2 lg:px-8 lg:py-4`}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            <Button variant="text" size="sm" className="hidden lg:inline-block">
              <span>Log In</span>
            </Button>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>Sign in</span>
            </Button>
          </div>
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
        <Link
          onClick={() => openNav && setOpenNav(isMobile && !openNav)}
          to={"/"}
        >
          <Typography className="mr-4 cursor-pointer py-1.5 font-medium">
            GoodCooking
          </Typography>
        </Link>
        <img className="lg:hidden" src={searchIcon} alt="search-icon" />
      </div>
      <Collapse open={openNav}>
        <hr className="mt-4 " />

        <div className="flex items-center gap-x-1 p-4 ">
          <Button fullWidth variant="text" size="sm" className="">
            <span>Log In</span>
          </Button>
          <Button fullWidth variant="gradient" size="sm" className="">
            <span>Sign in</span>
          </Button>
        </div>
        <hr className="mb-4 w-11/12 m-auto" />
        {navList}
      </Collapse>
    </Navbar>
  );
}
