import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="max-w-[1024px] mt-6 mx-auto h-[6vh] items-center flex justify-between mb-20">
      <h3 className="cursor-pointer">
        <Link
          href="/"
          className="text-zinc-400 hover:text-zinc-100 transition duration-200"
        >
          Aleksei Filonov
        </Link>
      </h3>
      <NavigationMenu>
        <NavigationMenuList className="gap-8">
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Link href="/projects">Projects</Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul>
                <li className="nav-dropdown-link">
                  <Link href="/projects/#webdev">Web Development</Link>
                </li>
                <li className="nav-dropdown-link">
                  <Link href="/projects/#uiux">UI/UX</Link>
                </li>
                <li className="nav-dropdown-link">
                  <Link href="/projects/#datascience">Data Science</Link>
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
      {/* <li className="nav-link">Skills</li>
        <li className="nav-link">Contacts</li> */}
    </nav>
  );
};

export default NavBar;
