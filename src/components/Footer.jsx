import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px">
        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-6 md:space-y-0">
          {/* Logo or Title */}
          <div className="text-xl font-bold">News Reader</div>

          {/* Navigation Links */}
          <ul className="flex space-x-25 text-sm align-items">
            <li className="w-[127px] h-auto flex flex-col flex-wrap ">
              <a href="#" className="hover:text-gray-400  font-bold">
                About Us
              </a>
              <a href="#" className="hover:text-gray-400">
                Citizens Character
              </a>
              <a href="#" className="hover:text-gray-400">
                All India Radio
              </a>
              <a href="#" className="hover:text-gray-400 ">
                feedback
              </a>
              <a href="#" className="hover:text-gray-400">
                Web Information
              </a>
              <a href="#" className="hover:text-gray-400 ">
                Help
              </a>
            </li>
            <li className="w-[127px] h-auto flex  flex-col flex-wrap ">
              <a href="#" className="hover:text-gray-400 font-bold mr-3">
                Resources
              </a>
              <a href="#" className="hover:text-gray-400">
                AI Library
              </a>
              <a href="#" className="hover:text-gray-400">
                Case Studies
              </a>
              <a href="#" className="hover:text-gray-400">
                Blog
              </a>
              <a href="#" className="hover:text-gray-400">
                Documentation
              </a>
              <a href="#" className="hover:text-gray-400">
                Social Media
              </a>
            </li>
            <li className="w-[127px] h-auto flex flex-col flex-wrap ">
              <a href="#" className="hover:text-gray-400 font-bold mr-3">
                Downloads
              </a>
              <a href="#" className="hover:text-gray-400">
                iOS
              </a>
              <a href="#" className="hover:text-gray-400">
                Android
              </a>
              <a href="#" className="hover:text-gray-400">
                Chrome Extension
              </a>
              <a href="#" className="hover:text-gray-400">
                Firefox extension
              </a>
            </li>
            <li className="w-[165px] h-auto flex flex-col flex-wrap ">
              <a href="#" className="hover:text-gray-400  font-bold mr-5">
                contact Us
              </a>
              <a href="#" className="hover:text-gray-400 mr-3">
                Email: exapmle@gmail.com
              </a>
              <a href="#" className="hover:text-gray-400 mr-3">
                phone: +91 5468256778
              </a>
            </li>
          </ul>

          {/* Social Media Icons (use emoji or replace with icons) */}

          <div className="flex flex-col space-x-3 text-lg">
            <div>Social Media Connect</div>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-400"
            ></a>
            <div className="space-x-4 text-lg">
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-blue-300"
              ></a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-pink-400"
              >
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-pink-400">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Github" className="hover:text-pink-400">
                <GitHubIcon />
              </a>
              <a
                href="#"
                aria-label="TwitterIcon"
                className="hover:text-pink-400"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
