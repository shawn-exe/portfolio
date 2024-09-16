"use client";
import Link from "next/link";
import { Navbar } from "flowbite-react";

export function Nav() {
  return (
    <div className="p-5 rounded-2xl">
    <Navbar fluid rounded className="bg-black rounded-lg">
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
        <Navbar.Link href="#"><span className="font-semibold text-xl">Services</span></Navbar.Link>
        <Navbar.Link href="#"><span className="font-semibold text-xl">Pricing</span></Navbar.Link>
        <Navbar.Link href="#"><span className="font-semibold text-xl">Contact</span></Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}
