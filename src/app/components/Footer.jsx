import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 bg-black body-font flex justify-center items-center">
        <div className="container px-5 py-8 mx-auto text-center ">
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4  sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            All Rights Reserved by Megafeed Biotech © 2024{" "}
            <a
              className="text-gray-500 ml-1 cursor-grabbing"
              rel="noopener noreferrer"
              target="_blank"
            >
              Made with ♡ by Piyush Tale
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
