"use client";
import Image from "next/image";
import { useState } from "react";

export default function Shop() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#23856D] sm:block hidden">
        <div className="flex gap-[30px] h-[58px] items-center justify-center">
          <div className="flex gap-[10px]">
            <div className="flex gap-[5px] p-[10px] rounded-[5px] items-center">
              <Image src="contact.svg" alt="Contact" width={16} height={16} />
              <h6 className="text-[12px] font-medium text-white">
                (225) 555-0118
              </h6>
            </div>
            <div className="flex gap-[5px] p-[10px] rounded-[5px] items-center">
              <Image src="message.svg" alt="Message" width={16} height={12} />
              <h6 className="text-[12px] font-medium text-white">
                michelle.rivera@example.com
              </h6>
            </div>
          </div>
          <div className="p-[10px]">
            <h6 className="text-[14px] font-bold text-white">
              Follow Us and get a chance to win 80% off
            </h6>
          </div>
          <div className="flex gap-[10px] items-center p-[10px]">
            <h6 className="text-[14px] font-bold text-white">Follow Us :</h6>
            <div className="flex items-center">
              <a href="https://instagram.com/m.ahmad.official" target="_blank">
                <Image
                  className="p-[5px] gap-[10px]"
                  src="instagram.svg"
                  alt="Contact"
                  width={26}
                  height={26}
                />
              </a>
              <Image
                className="p-[5px] gap-[10px]"
                src="youtube.svg"
                alt="Youtube"
                width={26}
                height={26}
              />
              <a href="https://facebook.com/m.ahmad.official7" target="_blank">
                <Image
                  className="p-[5px] gap-[10px]"
                  src="facebook.svg"
                  alt="Facebook"
                  width={26}
                  height={26}
                />
              </a>
              <Image
                className="p-[5px] gap-[10px]"
                src="twitter.svg"
                alt="Twitter"
                width={26}
                height={26}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex sm:w-[1090px] w-full justify-between items-center h-[78px] px-6">
          <div className="sm:pl-8">
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
              <Image src="menu.svg" alt="Menu" width={24} height={14} />
            </button>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center justify-between w-[780px]">
            <ul className="flex gap-[15px]">
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
                    <Image
                      src="search.svg"
                      alt="Search"
                      width={16}
                      height={16}
                    />
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
      </div>
      {/* Mobile Menu */}
      <div
        className={`flex flex-col items-center gap-[30px] py-12 sm:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {menuOpen && (
          <>
            <a
              href="/"
              className="text-[30px] font-medium hover:text-[#252B42] text-[#737373]"
            >
              Home
            </a>
            <a href="/shop" className="text-[30px] font-medium text-[#737373]">
              Shop
            </a>
            <a href="/about" className="text-[30px] font-medium text-[#737373]">
              About
            </a>
            <a href="#" className="text-[30px] font-medium text-[#737373]">
              Blog
            </a>
            <a
              href="/contact"
              className="text-[30px] font-medium text-[#737373]"
            >
              Contact
            </a>
            <a
              href="/product"
              className="text-[30px] font-medium text-[#737373]"
            >
              Pages
            </a>
            <ul className="flex flex-col items-center">
              <li>
                <a href="#">
                  <div className="flex items-center gap-[5px] p-[15px] rounded-[37px]">
                    <Image
                      src="profile.svg"
                      alt="Profile"
                      width={28}
                      height={28}
                    />
                    <p className="text-[30px] font-medium text-[#23A6F0]">
                      Login / Register
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="p-[15px] rounded-[37px]">
                    <Image
                      src="search.svg"
                      alt="Search"
                      width={34}
                      height={34}
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="p-[15px] rounded-[37px] gap-2 flex items-center">
                    <Image src="cart.svg" alt="Cart" width={37} height={37} />
                    <p className="text-[#23A6F0] text-[16px] font-normal">1</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="p-[15px] rounded-[37px] gap-2 flex items-center">
                    <Image src="heart.svg" alt="Heart" width={30} height={30} />
                    <p className="text-[#23A6F0] text-[16px] font-normal">1</p>
                  </div>
                </a>
              </li>
            </ul>
          </>
        )}
      </div>
      <div className="flex justify-center bg-[#FAFAFA]">
        <div className="py-6 flex max-sm:flex-col items-center gap-[30px]">
          <h3 className="text-[24px] font-bold text-[#252B42] py-[10px] sm:pl-9 sm:w-[510px]">
            Shop
          </h3>
          <div className="flex items-center justify-center sm:justify-end gap-[15px] py-[10px] sm:w-[510px]">
            <a href="/" className="text-[14px] font-bold text-[#252B42]">
              Home
            </a>
            <Image src="arrowRightGray.svg" alt="Arrow" width={9} height={16} />
            <h6 className="text-[14px] font-bold text-[#737373]">Shop</h6>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#FAFAFA]">
        <div className="flex max-sm:flex-col gap-[18px] max-sm:py-6 sm:gap-[15px] pb-12">
          <div className="shop1 flex flex-col justify-center items-center gap-[10px] hover:scale-105 transition-all duration-300 cursor-pointer">
            <h6 className="text-[16px] font-bold text-[#FFFFFF]">CLOTHS</h6>
            <h6 className="text-[14px] font-medium text-[#FFFFFF]">5 Items</h6>
          </div>
          <div className="girlImage flex flex-col justify-center items-center gap-[10px] hover:scale-105 transition-all duration-300 cursor-pointer">
            <h6 className="text-[16px] font-bold text-[#FFFFFF]">CLOTHS</h6>
            <h6 className="text-[14px] font-medium text-[#FFFFFF]">5 Items</h6>
          </div>
          <div className="shop3 flex flex-col justify-center items-center gap-[10px] hover:scale-105 transition-all duration-300 cursor-pointer">
            <h6 className="text-[16px] font-bold text-[#FFFFFF]">CLOTHS</h6>
            <h6 className="text-[14px] font-medium text-[#FFFFFF]">5 Items</h6>
          </div>
          <div className="shop4 flex flex-col justify-center items-center gap-[10px] hover:scale-105 transition-all duration-300 cursor-pointer">
            <h6 className="text-[16px] font-bold text-[#FFFFFF]">CLOTHS</h6>
            <h6 className="text-[14px] font-medium text-[#FFFFFF]">5 Items</h6>
          </div>
          <div className="shop5 flex flex-col justify-center items-center gap-[10px] hover:scale-105 transition-all duration-300 cursor-pointer">
            <h6 className="text-[16px] font-bold text-[#FFFFFF]">CLOTHS</h6>
            <h6 className="text-[14px] font-medium text-[#FFFFFF]">5 Items</h6>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex max-sm:flex-col sm:justify-between max-sm:gap-6 items-center sm:w-[1050px] p-6">
          <h6 className="text-[14px] font-bold text-[#737373]">
            Showing all 12 results
          </h6>
          <div className="flex gap-[15px] items-center">
            <h6 className="text-[14px] font-bold text-[#737373]">Views:</h6>
            <div className="p-[15px] border-[1px] border-[#ECECEC] rounded-[5px]">
              <Image src="app.svg" alt="App" width={16} height={16} />
            </div>
            <div className="p-[15px] border-[1px] border-[#ECECEC] rounded-[5px]">
              <Image src="noteTick.svg" alt="Note" width={16} height={16} />
            </div>
          </div>
          <div className="flex gap-[15px]">
            <div className="bg-[#F9F9F9] px-5 py-[10px] border-[1px] border-[#DDDDDD] rounded-[5px] flex gap-[5px]">
              <h6 className="text-[14px] font-medium text-[#737373]">
                Popularity
              </h6>
              <Image
                src="chevron-down.svg"
                alt="Chevron Down"
                width={11}
                height={14}
              />
            </div>
            <button className="px-5 py-[10px] rounded-[5px] bg-[#23A6F0] hover:bg-[#ffffff] text-[14px] font-medium text-[#ffffff] hover:text-[#23A6F0] transition-all duration-200">
              Filter
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col sm:gap-12 gap-20 sm:py-12 py-20">
          <div className="max-sm:flex-col flex gap-[30px]">
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="flex flex-col">
                <div className="productcard1"></div>
                <div className="p-[25px] flex flex-col items-center gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <a className="text-[14px] font-bold text-[#737373]" href="/">
                    English Department
                  </a>
                  <div className="py-[5px] px-[3px] flex gap-[5px]">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                  <div className="flex gap-[6px]">
                    <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="flex flex-col">
                <div className="productcard2"></div>
                <div className="p-[25px] flex flex-col items-center gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <a className="text-[14px] font-bold text-[#737373]" href="/">
                    English Department
                  </a>
                  <div className="py-[5px] px-[3px] flex gap-[5px]">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                  <div className="flex gap-[6px]">
                    <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="flex flex-col">
                <div className="productcard3"></div>
                <div className="p-[25px] flex flex-col items-center gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <a className="text-[14px] font-bold text-[#737373]" href="/">
                    English Department
                  </a>
                  <div className="py-[5px] px-[3px] flex gap-[5px]">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                  <div className="flex gap-[6px]">
                    <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="flex flex-col">
                <div className="productcard4"></div>
                <div className="p-[25px] flex flex-col items-center gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <a className="text-[14px] font-bold text-[#737373]" href="/">
                    English Department
                  </a>
                  <div className="py-[5px] px-[3px] flex gap-[5px]">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                  <div className="flex gap-[6px]">
                    <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-sm:flex-col flex gap-[30px] max-sm:hidden">
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="flex flex-col">
                <div className="productcard5"></div>
                <div className="p-[25px] flex flex-col items-center gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <a className="text-[14px] font-bold text-[#737373]" href="/">
                    English Department
                  </a>
                  <div className="py-[5px] px-[3px] flex gap-[5px]">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                  <div className="flex gap-[6px]">
                    <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="flex flex-col">
                <div className="productcard6"></div>
                <div className="p-[25px] flex flex-col items-center gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <a className="text-[14px] font-bold text-[#737373]" href="/">
                    English Department
                  </a>
                  <div className="py-[5px] px-[3px] flex gap-[5px]">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                  <div className="flex gap-[6px]">
                    <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="flex flex-col">
                <div className="productcard7"></div>
                <div className="p-[25px] flex flex-col items-center gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <a className="text-[14px] font-bold text-[#737373]" href="/">
                    English Department
                  </a>
                  <div className="py-[5px] px-[3px] flex gap-[5px]">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                  <div className="flex gap-[6px]">
                    <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="flex flex-col">
                <div className="productcard8"></div>
                <div className="p-[25px] flex flex-col items-center gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <a className="text-[14px] font-bold text-[#737373]" href="/">
                    English Department
                  </a>
                  <div className="py-[5px] px-[3px] flex gap-[5px]">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                  <div className="flex gap-[6px]">
                    <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-sm:flex-col flex gap-[30px] max-sm:hidden">
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="flex flex-col">
                <div className="productcard9"></div>
                <div className="p-[25px] flex flex-col items-center gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <a className="text-[14px] font-bold text-[#737373]" href="/">
                    English Department
                  </a>
                  <div className="py-[5px] px-[3px] flex gap-[5px]">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                  <div className="flex gap-[6px]">
                    <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="flex flex-col">
                <div className="productcard10"></div>
                <div className="p-[25px] flex flex-col items-center gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <a className="text-[14px] font-bold text-[#737373]" href="/">
                    English Department
                  </a>
                  <div className="py-[5px] px-[3px] flex gap-[5px]">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                  <div className="flex gap-[6px]">
                    <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="flex flex-col">
                <div className="productcard11"></div>
                <div className="p-[25px] flex flex-col items-center gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <a className="text-[14px] font-bold text-[#737373]" href="/">
                    English Department
                  </a>
                  <div className="py-[5px] px-[3px] flex gap-[5px]">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                  <div className="flex gap-[6px]">
                    <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="flex flex-col">
                <div className="productcard12"></div>
                <div className="p-[25px] flex flex-col items-center gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <a className="text-[14px] font-bold text-[#737373]" href="/">
                    English Department
                  </a>
                  <div className="py-[5px] px-[3px] flex gap-[5px]">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                  <div className="flex gap-[6px]">
                    <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#23856D] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-[50%]"></div>
                    <div className="w-[16px] h-[16px] bg-[#252B42] rounded-[50%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <ul className="border-[1px] flex border-[E8E8E8] rounded-[7px]">
              <li className="border-[1px] border-[#BDBDBD] bg-[#F3F3F3] p-6">
                <a href="#" className="text-[14px] font-bold text-[#BDBDBD]">
                  First
                </a>
              </li>
              <li className="border-[1px] border-[#E9E9E9] bg-[#FFFFFF] py-6 px-5">
                <a href="#" className="text-[14px] font-bold text-[#23A6F0]">
                  1
                </a>
              </li>
              <li className="border-[1px] border-[#E9E9E9] bg-[#23A6F0] py-6 px-5">
                <a href="#" className="text-[14px] font-bold text-[#ffffff]">
                  2
                </a>
              </li>
              <li className="border-[1px] border-[#E9E9E9] bg-[#FFFFFF] py-6 px-5">
                <a href="#" className="text-[14px] font-bold text-[#23A6F0]">
                  3
                </a>
              </li>
              <li className="border-[1px] border-[#E8E8E8] bg-[#FFFFFF] p-6">
                <a href="#" className="text-[14px] font-bold text-[#23A6F0]">
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#FAFAFA]">
        <div className="flex max-sm:flex-col py-28 items-center gap-[60px] sm:gap-[30px] sm:py-[50px]">
          <Image src="client1.svg" alt="Client 1" width={153} height={34} />
          <Image src="client2.svg" alt="Client 2" width={146} height={59} />
          <Image src="client3.svg" alt="Client 3" width={152} height={75} />
          <Image src="client4.svg" alt="Client 4" width={151} height={42} />
          <Image src="client5.svg" alt="Client 5" width={151} height={62} />
          <Image src="client6.svg" alt="Client 6" width={151} height={72} />
        </div>
      </div>
      <footer className="flex flex-col">
        <div className="h-[173px] sm:h-[142px] flex items-center justify-center">
          <div className="w-[1050px] sm:pt-[40px] sm:pr-[40px] sm:pb-[40px] max-sm:p-[40px]">
            <div className="flex max-sm:flex-col sm:justify-between sm:items-center max-sm:gap-[20px]">
              <h2 className="text-[#252B42] font-bold text-[24px]">Bandage</h2>
              <div className="w-[112px] flex gap-[20px]">
                <a
                  href="https://facebook.com/m.ahmad.official7"
                  target="_blank"
                >
                  <Image src="face.svg" alt="Facebook" width={24} height={24} />
                </a>
                <a
                  href="https://instagram.com/m.ahmad.official"
                  target="_blank"
                >
                  <Image
                    src="insta.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="/">
                  <Image src="twt.svg" alt="Twitter" width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="sm:h-[272px] h-[1071px] flex items-center justify-center">
          <div className="py-[50-px]">
            <div className="sm:w-[1050px] sm:h-[170px] w-[321px] flex max-sm:flex-col gap-[30px]">
              <div className="w-[148px] flex flex-col gap-[20px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Company Info
                </h5>
                <div className="flex flex-col gap-[10px]">
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    About Us
                  </h6>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    Carrier
                  </h6>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    We are hiring
                  </h6>
                  <h6 className="text-[14px] font-bold text-[#737373]">Blog</h6>
                </div>
              </div>
              <div className="w-[148px] flex flex-col gap-[20px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">Legal</h5>
                <div className="flex flex-col gap-[10px]">
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    About Us
                  </h6>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    Carrier
                  </h6>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    We are hiring
                  </h6>
                  <h6 className="text-[14px] font-bold text-[#737373]">Blog</h6>
                </div>
              </div>
              <div className="w-[148px] flex flex-col gap-[20px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Features
                </h5>
                <div className="flex flex-col gap-[10px]">
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    Business Marketing
                  </h6>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    User Analytic
                  </h6>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    Live Chat
                  </h6>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    Unlimited Support
                  </h6>
                </div>
              </div>
              <div className="w-[148px] flex flex-col gap-[20px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Resources
                </h5>
                <div className="flex flex-col gap-[10px]">
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    IOS & Android
                  </h6>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    Watch a Demo
                  </h6>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    Customers
                  </h6>
                  <h6 className="text-[14px] font-bold text-[#737373]">API</h6>
                </div>
              </div>
              <div className="w-[321px] h-[131px] flex flex-col gap-[20px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Get In Touch
                </h5>
                <div className="flex flex-col gap-[5px]">
                  <div className="flex h-[58px]">
                    <input
                      type="email"
                      className="rounded-l-[5px] font-medium pl-5 border-[1px] border-[#E6E6E6] bg-[#F9F9F9] max-sm:w-[65%]"
                      placeholder="Your Email"
                    />
                    <button className="px-4 bg-[#23a6f0] text-white text-[14px] font-medium rounded-r-[5px] w-[30%] max-sm:flex max-sm:justify-center max-sm:items-center">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-[12px] font-medium text-[#737373]">
                    Lore imp sum dolor Amit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:h-[74px] h-[98px] bg-[#fafafa] flex items-center justify-center">
          <div className="sm:w-[1050px] w-[200px] py-[25px] flex items-center">
            <h6 className="text-[14px] font-bold max-sm:text-center text-[#737373]">
              Made With Love By Finland All Right Reserved
            </h6>
          </div>
        </div>
      </footer>
    </>
  );
}
