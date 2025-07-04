import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px">
        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-6 md:space-y-0">
          {/* Logo or Title */}
          <div className="text-xl font-bold">News Reader</div>

          {/* Navigation Links */}
          <ul className="flex space-x-6 text-sm align-items">
            <li className="w-[127px] h-auto flex flex-wrap ">
              <a href="#" className="hover:text-gray-400 mr-8 font-bold">
                About Us
              </a>
              <a href="#" className="hover:text-gray-400 mr-8">
                Citizens Character
              </a>
              <a href="#" className="hover:text-gray-400 mr-8">
                All India Radio
              </a>
              <a href="#" className="hover:text-gray-400 mr-8">
                feedback
              </a>
              <a href="#" className="hover:text-gray-400 mr-8">
                Web Information
              </a>
              <a href="#" className="hover:text-gray-400 mr-8">
                Help
              </a>
            </li>
            <li className="w-[127px] h-auto flex flex-wrap ">
              <a href="#" className="hover:text-gray-400 mr-8 font-bold">
                Resources
              </a>
              <a href="#" className="hover:text-gray-400 mr-8">
                AI Library
              </a>
              <a href="#" className="hover:text-gray-400 mr-8">
                Case Studies
              </a>
              <a href="#" className="hover:text-gray-400 mr-8">
                Blog
              </a>
              <a href="#" className="hover:text-gray-400 mr-8">
                Documentation
              </a>
              <a href="#" className="hover:text-gray-400 mr-8">
                Social Media Platforms
              </a>
            </li>
            <li className="w-[127px] h-auto flex flex-wrap ">
              <a href="#" className="hover:text-gray-400 mr-8 font-bold">
                Services
              </a>
            </li>
            <li className="w-[127px] h-auto flex flex-wrap ">
              <a href="#" className="hover:text-gray-400 mr-8 font-bold ">
                Contact
              </a>
            </li>
          </ul>

          {/* Social Media Icons (use emoji or replace with icons) */}

          <div className="flex flex-col space-x-4 text-lg">
            <div>hello</div>
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
