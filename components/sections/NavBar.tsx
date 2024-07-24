"use client";

import React, { useEffect, useState } from "react";
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
import { GoChevronDown } from "react-icons/go";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [showSidebarProjects, setShowSidebarProjects] = useState(false);

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "scroll";
    return () => {};
  }, [nav]);

  return (
    <nav className="max-w-[1024px] py-8 mx-auto h-[10vh] items-center flex justify-between mb-20 relative">
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

      <NavigationMenu className="hidden sm:block ml-auto">
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
        className={`flex fixed duration-300 ease-out h-screen sm:hidden  w-screen items-center justify-center ${
          nav
            ? "top-0 bg-[#121e2e]"
            : "-top-[100%] bg-gradient-to-b from-[#121e2e]"
        }`}
      >
        <ul className="text-slate-300 text-4xl flex flex-col gap-16">
          <li
            className="flex flex-col"
            onClick={() => setShowSidebarProjects(!showSidebarProjects)}
          >
            <div className="flex items-center gap-4 mb-6">
              Projects{" "}
              <GoChevronDown
                className={`${
                  showSidebarProjects ? "rotate-180" : "rotate-0"
                } transition duration-200`}
              />
            </div>

            <div
              className={`${
                showSidebarProjects
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              } transition-all duration-200 overflow-hidden`}
            >
              <ul className="text-xl text-slate-400 flex flex-col gap-2">
                <li onClick={() => setNav(false)}>
                  <Link href="/projects">All projects</Link>
                </li>
                <li onClick={() => setNav(false)}>
                  <Link href="/projects/#webdev">Web Development</Link>
                </li>
                <li onClick={() => setNav(false)}>
                  <Link href="/projects/#uiux">UI/UX</Link>
                </li>
                <li onClick={() => setNav(false)}>
                  <Link href="/projects/#datascience">Data Science</Link>
                </li>
              </ul>
            </div>
          </li>

          <li onClick={() => setNav(false)}>
            <Link href="/#skills">Skills</Link>
          </li>
          <li onClick={() => setNav(false)}>
            <Link href="/#contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
