"use client";
import React from "react";
import Link from "next/link";
import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <div>
      <Navbar fluid rounded style={{ backgroundColor: "black" }}>
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
          <img
            src="/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
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
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default Header;
