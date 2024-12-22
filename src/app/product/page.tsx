"use client";
import Image from "next/image";
import { useState } from "react";

export default function Product() {
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
          <div className="sm:pl-9">
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
                      height={21}
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
        <div className="py-6 flex max-sm:flex-col items-center sm:w-[970px] gap-[30px]">
          <div className="flex items-center justify-center gap-[15px] py-[10px]">
            <a href="/" className="text-[14px] font-bold text-[#252B42]">
              Home
            </a>
            <Image src="arrowRightGray.svg" alt="Arrow" width={9} height={16} />
            <h6 className="text-[14px] font-bold text-[#737373]">Shop</h6>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#FAFAFA]">
        <div className="sm:pb-12 max-sm:py-12 flex max-sm:flex-col gap-[30px]">
          <div className="flex flex-col sm:gap-4 gap-11">
            <div className="singleproduct1 flex items-center justify-center">
              <div className="flex justify-between w-[435px] max-sm:px-9 pt-3 sm:pt-24">
                <Image
                  src="chevronLeft.svg"
                  alt="Chevron Left"
                  width={24}
                  height={45}
                />
                <Image
                  src="chevronRight.svg"
                  alt="Chevron Right"
                  width={24}
                  height={45}
                />
              </div>
            </div>
            <div className="flex gap-5 sm:gap-4">
              <div className="singleproduct2"></div>
              <div className="singleproduct3"></div>
            </div>
          </div>
          <div className="flex flex-col h-[470px] p-6 sm:p-4 justify-between">
            <h4 className="text-[20px] font-medium text-[#252B42]">
              Floating Phone
            </h4>
            <div className="flex gap-[10px]">
              <div className="flex gap-[5px]">
                <Image src="stars.svg" alt="Stars" width={21} height={21} />
                <Image src="stars.svg" alt="Stars" width={21} height={21} />
                <Image src="stars.svg" alt="Stars" width={21} height={21} />
                <Image src="stars.svg" alt="Stars" width={21} height={21} />
                <Image src="star.svg" alt="Star" width={21} height={21} />
              </div>
              <h6 className="text-[14px] font-bold text-[#737373]">
                10 Reviews
              </h6>
            </div>
            <h5 className="text-[24px] font-bold text-[#252B42]">$1,139.33</h5>
            <div className="flex gap-[5px]">
              <h6 className="text-[14px] font-bold text-[#737373]">
                Availability :
              </h6>
              <h6 className="text-[14px] font-bold text-[#23A6F0]">In Stock</h6>
            </div>
            <p className="text-[14px] font-medium text-[#858585] w-[255px] sm:w-[430px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <hr className="border-[#BDBDBD]" />
            <div className="flex gap-[10px]">
              <div className="rounded-[50%] w-[30px] h-[30px] bg-[#23A6F0]"></div>
              <div className="rounded-[50%] w-[30px] h-[30px] bg-[#2DC071]"></div>
              <div className="rounded-[50%] w-[30px] h-[30px] bg-[#E77C40]"></div>
              <div className="rounded-[50%] w-[30px] h-[30px] bg-[#252B42]"></div>
            </div>
            <div className="flex gap-[10px]">
              <button className="rounded-[5px] py-[10px] px-[20px] bg-[#23A6F0] hover:bg-[#ffffff] text-[14px] font-bold text-[#FFFFFF] hover:text-[#23A6F0] transition-all duration-200">
                Select Options
              </button>
              <div className="bg-[#FFFFFF] border-[1px] border-[#E8E8E8] rounded-[50%] w-10 h-10 flex justify-center items-center">
                <svg
                  className="text-[#252B42] w-5 h-auto fill-current"
                  viewBox="0 0 530 530"
                >
                  <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                </svg>
              </div>
              <div className="bg-[#FFFFFF] border-[1px] border-[#E8E8E8] rounded-[50%] w-10 h-10 flex justify-center items-center">
                <Image src="basket.svg" alt="Basket" width={20} height={20} />
              </div>
              <div className="bg-[#FFFFFF] border-[1px] border-[#E8E8E8] rounded-[50%] w-10 h-10 flex justify-center items-center">
                <Image src="more.svg" alt="More" width={20} height={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <ul className="flex max-sm:py-8 max-sm:gap-[10px]">
          <li className="sm:p-6 text-[14px] max-sm:underline font-semibold text-[#737373]">
            Description
          </li>
          <li className="sm:p-6 text-[14px] font-bold text-[#737373]">
            Additional Information
          </li>
          <li className="sm:p-6 flex gap-2">
            <p className="text-[14px] font-bold text-[#737373]">Reviews</p>
            <p className="text-[14px] font-bold text-[#23856D]">(0)</p>
          </li>
        </ul>
      </div>
      <div className="flex justify-center max-sm:hidden">
        <div className="h-[2px] w-[1040px] bg-[#ECECEC]"></div>
      </div>
      <div className="flex justify-center">
        <div className="flex max-sm:flex-col gap-[30px] sm:py-12 py-6">
          <div className="w-[328px] h-[282px] sm:h-[385px] rounded-[7px] bg-[#C4C4C433]">
            <div className="product0"></div>
          </div>
          <div className="flex flex-col gap-[30px] max-sm:py-[25px] w-[330px]">
            <h5 className="text-[24px] font-bold text-[#252B42]">
              the quick fox jumps over
            </h5>
            <div className="text-[14px] font-medium text-[#737373] flex flex-col gap-[20px]">
              <h6>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </h6>
              <h6>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </h6>
              <h6>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </h6>
            </div>
          </div>
          <div className="flex flex-col gap-[25px]">
            <div className="flex flex-col gap-[30px]">
              <h5 className="text-[24px] font-bold text-[#252B42]">
                the quick fox jumps over
              </h5>
              <div className="flex flex-col gap-[10px]">
                <div className="flex gap-[20px]">
                  <Image
                    src="arrowRightGrey.svg"
                    alt="Arrow Right"
                    width={9}
                    height={21}
                  />
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </h6>
                </div>
                <div className="flex gap-[20px]">
                  <Image
                    src="arrowRightGrey.svg"
                    alt="Arrow Right"
                    width={9}
                    height={21}
                  />
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </h6>
                </div>
                <div className="flex gap-[20px]">
                  <Image
                    src="arrowRightGrey.svg"
                    alt="Arrow Right"
                    width={9}
                    height={21}
                  />
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </h6>
                </div>
                <div className="flex gap-[20px]">
                  <Image
                    src="arrowRightGrey.svg"
                    alt="Arrow Right"
                    width={9}
                    height={21}
                  />
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[30px]">
              <h5 className="text-[24px] font-bold text-[#252B42]">
                the quick fox jumps over
              </h5>
              <div className="flex flex-col gap-[10px]">
                <div className="flex gap-[20px]">
                  <Image
                    src="arrowRightGrey.svg"
                    alt="Arrow Right"
                    width={9}
                    height={21}
                  />
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </h6>
                </div>
                <div className="flex gap-[20px]">
                  <Image
                    src="arrowRightGrey.svg"
                    alt="Arrow Right"
                    width={9}
                    height={21}
                  />
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </h6>
                </div>
                <div className="flex gap-[20px]">
                  <Image
                    src="arrowRightGrey.svg"
                    alt="Arrow Right"
                    width={9}
                    height={21}
                  />
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </h6>
                </div>
                <div className="flex gap-[20px]">
                  <Image
                    src="arrowRightGrey.svg"
                    alt="Arrow Right"
                    width={9}
                    height={21}
                  />
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#FAFAFA]">
        <div className="flex flex-col gap-6 py-12">
          <div className="sm:w-[1040px]">
            <h3 className="text-[24px] font-bold text-[#252B42]">
              BESTSELLER PRODUCTS
            </h3>
          </div>
          <div className="h-[2px] sm:w-[1042px] w-[331px] bg-[#ECECEC]"></div>
          <div className="max-sm:flex-col flex gap-[30px]">
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="sm:h-[442px] bg-[#ffffff] flex flex-col">
                <div className="product-1"></div>
                <div className="px-[25px] py-[35px] flex flex-col gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    English Department
                  </h6>
                  <div className="w-[108px] h-[34px] py-[5px] px-[1px] flex justify-between">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="sm:h-[442px] bg-[#ffffff] flex flex-col">
                <div className="product-2"></div>
                <div className="px-[25px] py-[35px] flex flex-col gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    English Department
                  </h6>
                  <div className="w-[108px] h-[34px] py-[5px] px-[1px] flex justify-between">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="sm:h-[442px] bg-[#ffffff] flex flex-col">
                <div className="product-3"></div>
                <div className="px-[25px] py-[35px] flex flex-col gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    English Department
                  </h6>
                  <div className="w-[108px] h-[34px] py-[5px] px-[1px] flex justify-between">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="sm:h-[442px] bg-[#ffffff] flex flex-col">
                <div className="product-4"></div>
                <div className="px-[25px] py-[35px] flex flex-col gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    English Department
                  </h6>
                  <div className="w-[108px] h-[34px] py-[5px] px-[1px] flex justify-between">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-sm:flex-col flex gap-[30px] max-sm:hidden">
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="h-[442px] bg-[#ffffff] flex flex-col">
                <div className="product-5"></div>
                <div className="px-[25px] py-[35px] flex flex-col gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    English Department
                  </h6>
                  <div className="w-[108px] h-[34px] py-[5px] px-[1px] flex justify-between">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="h-[442px] bg-[#ffffff] flex flex-col">
                <div className="product-6"></div>
                <div className="px-[25px] py-[35px] flex flex-col gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    English Department
                  </h6>
                  <div className="w-[108px] h-[34px] py-[5px] px-[1px] flex justify-between">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="h-[442px] bg-[#ffffff] flex flex-col">
                <div className="product-7"></div>
                <div className="px-[25px] py-[35px] flex flex-col gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    English Department
                  </h6>
                  <div className="w-[108px] h-[34px] py-[5px] px-[1px] flex justify-between">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="h-[442px] bg-[#ffffff] flex flex-col">
                <div className="product-8"></div>
                <div className="px-[25px] py-[35px] flex flex-col gap-[10px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Graphic Design
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    English Department
                  </h6>
                  <div className="w-[108px] h-[34px] py-[5px] px-[1px] flex justify-between">
                    <h5 className="text-[16px] font-bold text-[#BDBDBD]">
                      $16.48
                    </h5>
                    <h5 className="text-[16px] font-bold text-[#23856D]">
                      $6.48
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#FAFAFA]">
        <div className="flex max-sm:flex-col py-28 items-center gap-[60px] sm:gap-[30px] sm:py-[50px]">
          <Image src="client1.svg" alt="Client 1" width={153} height={50} />
          <Image src="client2.svg" alt="Client 2" width={146} height={99} />
          <Image src="client3.svg" alt="Client 3" width={152} height={109} />
          <Image src="client4.svg" alt="Client 4" width={149} height={60} />
          <Image src="client5.svg" alt="Client 5" width={151} height={92} />
          <Image src="client6.svg" alt="Client 6" width={151} height={142} />
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
                <div className="h-[58px] flex flex-col gap-[5px]">
                  <div className="flex h-[58px]">
                    <input
                      type="email"
                      className="rounded-l-[5px] font-medium pl-5 border-[1px] border-[#E6E6E6] bg-[#F9F9F9]"
                      placeholder="Your Email"
                    />
                    <button className="h-[58px] px-4 bg-[#23a6f0] text-white text-[14px] font-medium rounded-r-[5px]">
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
