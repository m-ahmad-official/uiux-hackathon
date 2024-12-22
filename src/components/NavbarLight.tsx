"use client";
import Image from "next/image";
import { useState } from "react";

export default function NavbarLight() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center h-[78px] px-6">
        <div className="sm:p-[10px]">
          <h3 className="font-bold text-[24px] text-[#252B42]">
            <a href="/">Bandage</a>
          </h3>
        </div>
        {/* Hamburger Menu for Mobile */}
        <div className="flex">
          <button
            className="max-sm:block hidden px-[11px]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Image src="search2.svg" alt="Search" width={24} height={24} />
          </button>
          <button
            className="max-sm:block hidden px-[11px]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Image src="cart2.svg" alt="Cart" width={24} height={24} />
          </button>
          <button
            className="max-sm:block hidden px-[11px]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Image src="menu.svg" alt="Menu" width={24} height={24} />
          </button>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center justify-between w-[1155px]">
          <ul className="flex justify-between w-[361px]">
            <li className="text-[14px] font-bold text-[#737373]">
              <a href="/">Home</a>
            </li>
            <li className="flex gap-[10px] text-[14px] font-medium text-[#252B42]">
              <a href="/shop">Shop</a>
              <Image
                src="chevron-down.svg"
                alt="Chevron Down"
                width={10}
                height={21}
              />
            </li>
            <li className="text-[14px] font-bold text-[#737373]">
              <a href="/about">About</a>
            </li>
            <li className="text-[14px] font-bold text-[#737373]">
              <a href="#">Blog</a>
            </li>
            <li className="text-[14px] font-bold text-[#737373]">
              <a href="/contact">Contact</a>
            </li>
            <li className="text-[14px] font-bold text-[#737373]">
              <a href="/product">Pages</a>
            </li>
          </ul>
          <ul className="flex justify-between w-[324px]">
            <li className="text-[14px] font-bold text-[#23A6F0]">
              <a href="#">
                <div className="flex gap-[5px] p-[15px] rounded-[37px]">
                  <Image
                    src="profile.svg"
                    alt="Profile"
                    width={12}
                    height={12}
                  />
                  <p>Login / Register</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="flex gap-[5px] p-[15px] rounded-[37px]">
                  <Image src="search.svg" alt="Search" width={16} height={16} />
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="flex gap-[5px] p-[15px] rounded-[37px]">
                  <Image src="cart.svg" alt="Cart" width={16} height={16} />
                  <p className="text-[#23A6F0] text-[12px] font-normal">1</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="flex gap-[5px] p-[15px] rounded-[37px]">
                  <Image src="heart.svg" alt="Heart" width={16} height={16} />
                  <p className="text-[#23A6F0] text-[12px] font-normal">1</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`flex flex-col items-center gap-[30px] py-12 sm:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {menuOpen && (
          <>
            <a href="/" className="text-[26px] font-medium text-[#737373]">
              Home
            </a>
            <a href="/shop" className="text-[26px] font-medium text-[#737373]">
              Shop
            </a>
            <a href="/about" className="text-[26px] font-medium text-[#737373]">
              About
            </a>
            <a href="#" className="text-[26px] font-medium text-[#737373]">
              Blog
            </a>
            <a
              href="/contact"
              className="text-[26px] font-medium text-[#737373]"
            >
              Contact
            </a>
            <a
              href="/product"
              className="text-[26px] font-medium text-[#737373]"
            >
              Pages
            </a>
          </>
        )}
      </div>
    </>
  );
}
