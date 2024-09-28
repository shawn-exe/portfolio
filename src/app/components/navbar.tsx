"use client";
import Link from "next/link";
import { Navbar, CustomFlowbiteTheme } from "flowbite-react";

const customTheme: CustomFlowbiteTheme['navbar'] = {
  link: {
    base: "block py-2 pr-4 pl-3 md:p-0",
    active: {
      on: "bg-blue-700 text-white dark:text-white md:bg-transparent md:text-blue-500",
      off: "text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-500 md:dark:hover:bg-transparent md:dark:hover:text-white"
    },
    disabled: {
      on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      off: ""
    }
  }
};

export function Nav() {
  return (
    <div className="p-5 rounded-2xl">
      <Navbar fluid rounded className="bg-black rounded-lg" theme={customTheme}>
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-3xl font-semibold text-blue-500 dark:text-black">PortFolio</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            <span className="font-semibold text-xl">Home</span>
          </Navbar.Link>
          <Navbar.Link as={Link} href="#">
            <span className="font-semibold text-xl">About</span>
          </Navbar.Link>
          <Navbar.Link href="#">
            <span className="font-semibold text-xl">Projects</span>
          </Navbar.Link>
          <Navbar.Link href="#">
            <span className="font-semibold text-xl">Resume</span>
          </Navbar.Link>
          <Navbar.Link href="#">
            <span className="font-semibold text-xl">Contact</span>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
