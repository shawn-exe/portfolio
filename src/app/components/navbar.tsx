"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Navbar, CustomFlowbiteTheme } from "flowbite-react";
import { FileUser, Home, Layers3, Send, User } from "lucide-react";

const customTheme: CustomFlowbiteTheme['navbar'] = {
  link: {
    base: "block py-2 pr-4 pl-3 md:p-0",
    active: {
      on: " dark:text-white text-blue-500 ",
      off: "text-white hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-500 md:dark:hover:bg-transparent md:dark:hover:text-white"
    },
    disabled: {
      on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      off: ""
    }
  }
};

export function Nav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <div className="px-5 pt-5">
      <Navbar fluid rounded className="rounded-lg bg-transparent" theme={customTheme}>
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-3xl font-semibold text-blue-500 dark:text-black">PortFolio</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" active={isActive('/')}>
            <span className='text-xl flex gap-1 px-1'><Home/>Home</span>
          </Navbar.Link>
          <Navbar.Link  href="/about" active={isActive('/about')}>
           <span className='text-xl flex gap-1 px-1'><User/> About</span>
          </Navbar.Link>
          <Navbar.Link href="/projects" active={isActive('/projects')}>
            <span className='text-xl flex gap-1 px-1'><Layers3/> Projects</span>
          </Navbar.Link>
          <Navbar.Link href="/resume" active={isActive('/resume')}>
            <span className='text-xl flex gap-1 px-1'><FileUser/> Resume</span>
          </Navbar.Link>
          <Navbar.Link href="/contact" active={isActive('/contact')}>
            <span className='text-xl flex gap-1 px-1'><Send/> Contact</span>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
