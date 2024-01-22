"use client";
import React from "react";
import Link from "next/link";
import { Navbar } from "flowbite-react";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <Navbar fluid rounded style={{ backgroundColor: "black" }}>
        <Navbar.Brand className="mx-auto">
            <Image
              src="/logo.jpg"
              className="mr-3 rounded-2xl h-6 sm:h-9"
              width={50}
              height={70}
              alt="Logo"
            />
          <span className="self-center whitespace-nowrap text-xl  dark:text-white">
            Megafeed Biotech
          </span>
        </Navbar.Brand>
        {/* <Navbar.Toggle /> */}
        {/* <Navbar.Collapse>
          <Navbar.Link href="#" className="text-cyan-500		">
            Home
          </Navbar.Link>
          <Navbar.Link href="#" className="text-cyan-500		">
            About
          </Navbar.Link>
          <Navbar.Link href="#" className="text-cyan-500		">
            Services
          </Navbar.Link>
          <Navbar.Link href="#" className="text-cyan-500		">
            Pricing
          </Navbar.Link>
          <Navbar.Link href="#" className="text-cyan-500		">
            Contact
          </Navbar.Link>
        </Navbar.Collapse> */}
      </Navbar>
    </div>
  );
};
export default Header;
