"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "./assets/icon.png";
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import { HiMenu, HiX } from "react-icons/hi";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <nav className="w-full h-[100px] bg-[#0E0D0A] text-[#987b2d] border-[#DDA325] border-b-2">
      <div className="relative flex items-center justify-center w-full h-[100px]">
        {/* Title Centered */}

        <div className="flex items-center w-auto h-auto mr-10">
          <Image
            src={logo1}
            alt="Background"
            quality={100}
            className="h-[75px] w-[67px] mr-2 absolute"
          />
          <Image
            src={logo2}
            alt="Background"
            quality={100}
            className="h-[75px] w-[67px] mr-2 "
          />

          <span className="flex flex-col items-center animate-slideInRight">
            <h1 className="font-serif text-3xl font-medium">VISTARA</h1>
            <h1 className="font-mono text-xs font-medium">CEILINGS & WALLS</h1>
          </span>
        </div>

        {/* Hamburger Button on Left */}
        <button
          className="block text-3xl text-[#987b2d] md:hidden absolute space-y-1 left-4"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed left-0 z-10 flex flex-col items-center w-full gap-4 p-4 text-lg font-bold text-[#987b2d] bg-[#151307] top-20 bg-opacity-0 backdrop-blur-md">
            <Link
              href="/"
              className="hover:text-[#D4AF37] transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-[#D4AF37] transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>
            <Link
              href="/gallery"
              className="hover:text-[#D4AF37] transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              Gallery
            </Link>
            <Link
              href="/FAQ"
              className="hover:text-[#D4AF37] transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              FAQ'S
            </Link>

            <Link
              href="/client"
              className="hover:text-[#D4AF37] transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              Clients & Partners
            </Link>
            <Link
              href="/customerguide"
              className="hover:text-[#D4AF37] transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              Customer Guide
            </Link>
            <Link
              href="/contactus"
              className="hover:text-[#D4AF37] transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              Photos & Videos
            </Link>
            <Link
              href="/contactus"
              className="hover:text-[#D4AF37] transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              Designs For Properties
            </Link>
            <Link
              href="/contactus"
              className="hover:text-[#D4AF37] transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              Contact Us
            </Link>

            <div className="flex gap-4 mt-4 text-xl">
              <a href="https://www.instagram.com" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com" target="_blank">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <FaLinkedin />
              </a>
              <a href="https://www.youtube.com" target="_blank">
                <FaYoutube />
              </a>
            </div>

            <button className="w-40 mt-4 font-bold text-[#ffffff] transition-colors duration-200 rounded-lg h-14 bg-[#987b2d] hover:bg-opacity-40">
              Get a Quote
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
