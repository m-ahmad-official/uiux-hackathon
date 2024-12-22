"use client";
import Image from "next/image";
import { useState } from "react";

export default function Team() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex flex-col justify-center items-center">
        <div className="max-sm:h-[91px] flex flex-col max-sm:w-full max-sm:bg-[#F6F6F6]">
          <div className="flex sm:w-[1050px] w-full justify-between items-center py-6 max-sm:p-6">
            <h3 className="text-[24px] font-bold text-[#252B42]">
              <a href="/">Bandage</a>
            </h3>
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
                <Image src="cart2.svg" alt="Cart" width={24} height={23} />
              </button>
              <button
                className="max-sm:block hidden px-[11px]"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <Image src="menu.svg" alt="Menu" width={24} height={14} />
              </button>
            </div>
            {/* Desktop Navigation */}
            <div className="w-[815px] hidden sm:flex justify-between items-center">
              <ul className="flex gap-[21px]">
                <li className="text-[14px] font-bold text-[#737373]">
                  <a href="/">Home</a>
                </li>
                <li className="text-[14px] font-bold text-[#737373]">
                  <a href="/product">Product</a>
                </li>
                <li className="text-[14px] font-bold text-[#737373]">
                  <a href="/pricing">Pricing</a>
                </li>
                <li className="text-[14px] font-bold text-[#737373]">
                  <a href="/team">Team</a>
                </li>
                <li className="text-[14px] font-bold text-[#737373]">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
              <div className="h-[52px] flex gap-[30px]">
                <button className="w-[100px] h-[52px] text-[14px] font-bold text-[#23A6F0] hover:bg-[#23A6F0] bg-[#ffffff] hover:text-[#ffffff] rounded-[5px] transition-all duration-100">
                  <a href="#">Login</a>
                </button>
                <button className="w-[214px] h-[52px] py-[15px] px-[25px] flex items-center justify-between bg-[#23A6F0] hover:bg-[#ffffff] text-[14px] font-bold hover:text-[#23A6F0] text-[#FFFFFF] rounded-[5px] transition-all duration-100">
                  Become a member
                  <div className="w-3 h-[10px]">
                    <Image
                      src="arrowRightWhite.svg"
                      alt="Arrow Right"
                      width={12}
                      height={10}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`flex flex-col w-full items-center gap-[30px] py-16 sm:hidden max-sm:bg-[#F6F6F6] transition-all duration-300 ease-in-out ${
            menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {menuOpen && (
            <>
              <a href="/" className="text-[26px] font-medium text-[#737373]">
                Home
              </a>
              <a
                href="/product"
                className="text-[26px] font-medium text-[#737373]"
              >
                Product
              </a>
              <a
                href="/pricing"
                className="text-[26px] font-medium text-[#737373]"
              >
                Pricing
              </a>
              <a href="team" className="text-[26px] font-medium text-[#737373]">
                Team
              </a>
              <a
                href="contact"
                className="text-[26px] font-medium text-[#737373]"
              >
                Contact
              </a>
            </>
          )}
        </div>
      </header>
      <div className="py-[50px] flex flex-col items-center gap-4">
        <h5 className="text-[16px] font-bold text-[#737373]">WHAT WE DO</h5>
        <h2 className="sm:text-[58px] text-[40px] font-bold text-[#252B42] max-sm:w-[330px] text-center">
          Innovation tailored for you
        </h2>
        <div className="flex items-center gap-[15px] py-[10px]">
          <a href="/" className="text-[14px] font-bold text-[#252B42]">
            Home
          </a>
          <div className="w-[9px] h-[16px]">
            <Image src="arrowRightGray.svg" alt="Arrow" width={9} height={16} />
          </div>
          <h6 className="text-[14px] font-bold text-[#737373]">Team</h6>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex max-sm:flex-col max-sm:gap-2 sm:w-[1440px] justify-between">
          <div className="team10"></div>
          <div className="flex flex-col max-sm:gap-2 justify-between">
            <div className="flex sm:w-[732px] justify-between">
              <div className="team11"></div>
              <div className="team12"></div>
            </div>
            <div className="flex sm:w-[732px] justify-between">
              <div className="team13"></div>
              <div className="team14"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col sm:gap-28 sm:py-28 py-[30px]">
          <div className="flex justify-center max-sm:py-[45px]">
            <h2 className="text-[40px] font-bold text-[#252B42] max-sm:w-[250px] text-center">
              Meet Our Team
            </h2>
          </div>
          <div className="flex max-sm:flex-col gap-[30px]">
            <div className="flex flex-col h-[383px] w-[316px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="team1"></div>
              <div className="h-[152px] flex flex-col justify-center items-center gap-[10px] p-[30px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Username
                </h5>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  Profession
                </h6>
                <div className="flex gap-[20px]">
                  <Image
                    src="face.svg"
                    alt="Facebook"
                    className="sm:block hidden"
                    width={23}
                    height={23}
                  />
                  <Image
                    src="face1.svg"
                    alt="Facebook"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="insta.svg"
                    alt="Instagram"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="insta1.svg"
                    alt="Instagram"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="twt.svg"
                    alt="Twitter"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="twt1.svg"
                    alt="Twitter"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col h-[383px] w-[316px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="team2"></div>
              <div className="h-[152px] flex flex-col justify-center items-center gap-[10px] p-[30px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Username
                </h5>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  Profession
                </h6>
                <div className="flex gap-[20px]">
                  <Image
                    src="face.svg"
                    alt="Facebook"
                    className="sm:block hidden"
                    width={23}
                    height={23}
                  />
                  <Image
                    src="face1.svg"
                    alt="Facebook"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="insta.svg"
                    alt="Instagram"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="insta1.svg"
                    alt="Instagram"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="twt.svg"
                    alt="Twitter"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="twt1.svg"
                    alt="Twitter"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col h-[383px] w-[316px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="team3"></div>
              <div className="h-[152px] flex flex-col justify-center items-center gap-[10px] p-[30px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Username
                </h5>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  Profession
                </h6>
                <div className="flex gap-[20px]">
                  <Image
                    src="face.svg"
                    alt="Facebook"
                    className="sm:block hidden"
                    width={23}
                    height={23}
                  />
                  <Image
                    src="face1.svg"
                    alt="Facebook"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="insta.svg"
                    alt="Instagram"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="insta1.svg"
                    alt="Instagram"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="twt.svg"
                    alt="Twitter"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="twt1.svg"
                    alt="Twitter"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-sm:flex-col gap-[30px]">
            <div className="flex flex-col h-[383px] w-[316px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="team4"></div>
              <div className="h-[152px] flex flex-col justify-center items-center gap-[10px] p-[30px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Username
                </h5>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  Profession
                </h6>
                <div className="flex gap-[20px]">
                  <Image
                    src="face.svg"
                    alt="Facebook"
                    className="sm:block hidden"
                    width={23}
                    height={23}
                  />
                  <Image
                    src="face1.svg"
                    alt="Facebook"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="insta.svg"
                    alt="Instagram"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="insta1.svg"
                    alt="Instagram"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="twt.svg"
                    alt="Twitter"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="twt1.svg"
                    alt="Twitter"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col h-[383px] w-[316px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="team5"></div>
              <div className="h-[152px] flex flex-col justify-center items-center gap-[10px] p-[30px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Username
                </h5>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  Profession
                </h6>
                <div className="flex gap-[20px]">
                  <Image
                    src="face.svg"
                    alt="Facebook"
                    className="sm:block hidden"
                    width={23}
                    height={23}
                  />
                  <Image
                    src="face1.svg"
                    alt="Facebook"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="insta.svg"
                    alt="Instagram"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="insta1.svg"
                    alt="Instagram"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="twt.svg"
                    alt="Twitter"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="twt1.svg"
                    alt="Twitter"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col h-[383px] w-[316px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="team6"></div>
              <div className="h-[152px] flex flex-col justify-center items-center gap-[10px] p-[30px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Username
                </h5>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  Profession
                </h6>
                <div className="flex gap-[20px]">
                  <Image
                    src="face.svg"
                    alt="Facebook"
                    className="sm:block hidden"
                    width={23}
                    height={23}
                  />
                  <Image
                    src="face1.svg"
                    alt="Facebook"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="insta.svg"
                    alt="Instagram"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="insta1.svg"
                    alt="Instagram"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="twt.svg"
                    alt="Twitter"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="twt1.svg"
                    alt="Twitter"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-sm:flex-col gap-[30px]">
            <div className="flex flex-col h-[383px] w-[316px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="team7"></div>
              <div className="h-[152px] flex flex-col justify-center items-center gap-[10px] p-[30px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Username
                </h5>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  Profession
                </h6>
                <div className="flex gap-[20px]">
                  <Image
                    src="face.svg"
                    alt="Facebook"
                    className="sm:block hidden"
                    width={23}
                    height={23}
                  />
                  <Image
                    src="face1.svg"
                    alt="Facebook"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="insta.svg"
                    alt="Instagram"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="insta1.svg"
                    alt="Instagram"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="twt.svg"
                    alt="Twitter"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="twt1.svg"
                    alt="Twitter"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col h-[383px] w-[316px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="team8"></div>
              <div className="h-[152px] flex flex-col justify-center items-center gap-[10px] p-[30px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Username
                </h5>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  Profession
                </h6>
                <div className="flex gap-[20px]">
                  <Image
                    src="face.svg"
                    alt="Facebook"
                    className="sm:block hidden"
                    width={23}
                    height={23}
                  />
                  <Image
                    src="face1.svg"
                    alt="Facebook"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="insta.svg"
                    alt="Instagram"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="insta1.svg"
                    alt="Instagram"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="twt.svg"
                    alt="Twitter"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="twt1.svg"
                    alt="Twitter"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col h-[383px] w-[316px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="team9"></div>
              <div className="h-[152px] flex flex-col justify-center items-center gap-[10px] p-[30px]">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Username
                </h5>
                <h6 className="text-[14px] font-bold text-[#737373]">
                  Profession
                </h6>
                <div className="flex gap-[20px]">
                  <Image
                    src="face.svg"
                    alt="Facebook"
                    className="sm:block hidden"
                    width={23}
                    height={23}
                  />
                  <Image
                    src="face1.svg"
                    alt="Facebook"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="insta.svg"
                    alt="Instagram"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="insta1.svg"
                    alt="Instagram"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                  <Image
                    src="twt.svg"
                    alt="Twitter"
                    className="sm:block hidden"
                    width={22}
                    height={23}
                  />
                  <Image
                    src="twt1.svg"
                    alt="Twitter"
                    className="max-sm:block hidden"
                    width={25}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-[#ffffff] justify-center items-center w-full flex-col gap-[30px] p-28 sm:py-40">
        <h2 className="text-[40px] font-bold text-[#252B42] max-sm:w-[321px] text-center">
          Start your 14 days free trial
        </h2>
        <h6 className="text-[14px] font-medium text-[#737373] w-[411px] text-center max-sm:w-[321px]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </h6>
        <button className="bg-[#23A6F0] hover:bg-[#fff] w-[186px] px-[40px] py-[15px] rounded-[5px] text-[#FFFFFF] hover:text-[#23A6F0] font-bold text-[14px] transition-all duration-200">
          Try for free
        </button>
        <div className="flex items-center justify-center gap-[34px] py-[10px]">
          <Image src="twt.svg" alt="Twitter" width={30} height={25} />
          <Image src="face1.svg" alt="Facebook" width={30} height={30} />
          <Image src="instab.svg" alt="Instagram" width={30} height={30} />
          <Image src="link.svg" alt="Linkedin" width={30} height={30} />
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
