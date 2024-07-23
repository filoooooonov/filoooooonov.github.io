"use client";

import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="max-w-[1024px] py-8 mx-auto h-[6vh] items-center flex justify-between mb-20">
      <h3 className="z-50 cursor-pointer absolute top-6">
        <Link
          href="/"
          className="ml-8 sm:ml-0 text-zinc-400 hover:text-zinc-100 transition duration-200"
        >
          Aleksei Filonov
        </Link>
      </h3>
      <div className="absolute z-50 block sm:hidden right-8 top-6">
        {!nav ? (
          <RiMenu3Line
            className="transition-opacity duration-300 ease-in-out"
            onClick={() => setNav(true)}
            color="white"
            size={25}
          />
        ) : (
          <IoMdClose
            className={`transition-all duration-300 ease-in-out transform ${
              nav ? "rotate-0" : "-rotate-90"
            }`}
            onClick={() => setNav(false)}
            color="white"
            size={30}
          />
        )}
      </div>

      <NavigationMenu className="hidden sm:block">
        <NavigationMenuList className="gap-8">
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Link href="/projects">Projects</Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="nav-dropdown ">
              <ul className="flex gap-2 flex-col">
                <li className="nav-dropdown-link">
                  <Link
                    href="/projects/#webdev"
                    className="block w-full cursor-pointer py-3 px-2"
                  >
                    Web Development
                  </Link>
                </li>
                <li className="nav-dropdown-link">
                  <Link
                    href="/projects/#uiux"
                    className="block w-full cursor-pointer py-3 px-2"
                  >
                    UI/UX
                  </Link>
                </li>
                <li className="nav-dropdown-link">
                  <Link
                    href="/projects/#datascience"
                    className="block w-full cursor-pointer py-3 px-2"
                  >
                    Data Science
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/#skills" className="nav-link">
              Skills
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/#contacts" className="nav-link">
              Contacts
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Sidebar */}
      <div
        className={`block fixed duration-300 ease-out h-screen sm:hidden  w-screen ${
          nav
            ? "top-0 bg-[#121e2e]"
            : "-top-[100%] bg-gradient-to-b from-[#121e2e]"
        }`}
      ></div>
    </nav>
  );
};

export default NavBar;
