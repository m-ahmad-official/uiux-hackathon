"use client";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
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
      <div className="flex max-sm:flex-col max-sm:gap-[40px] justify-center items-center">
        <div className="sm:w-[680px] sm:px-[9%]">
          <div className="flex flex-col max-sm:justify-center max-sm:items-center gap-[40px] max-sm:h-[625px] sm:gap-[35px] w-[270px] sm:w-[400px] max-sm:text-center">
            <h5 className="text-[16px] font-bold text-[#252B42]">CONTACT US</h5>
            <h1 className="sm:text-[58px] text-[40px] font-bold text-[#252B42]">
              Get in touch today!
            </h1>
            <h4 className="sm:block hidden text-[20px] font-medium text-[#737373]">
              We know how large objects will act, but things on a small scale
            </h4>
            <h4 className="max-sm:block hidden text-[20px] font-medium text-[#737373]">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </h4>
            <div className="flex flex-col justify-between h-[84px]">
              <p className="text-[24px] font-bold text-[#252B42]">
                Phone ; +451 215 215
              </p>
              <p className="text-[24px] font-bold text-[#252B42]">
                Fax : +451 215 215
              </p>
            </div>
            <div className="flex justify-between w-[242px] p-[10px]">
              <Image src="twtb.svg" alt="Twitter" width={30} height={30} />
              <Image src="faceb.svg" alt="Facebook" width={30} height={30} />
              <Image src="instab.svg" alt="Instagram" width={30} height={30} />
              <Image src="linkb.svg" alt="LinkedIn" width={30} height={30} />
            </div>
          </div>
        </div>
        <div className="contactHeader"></div>
      </div>
      <div className="flex justify-center max-sm:h-[1600px] max-sm:bg-[#FAFAFA]">
        <div className="flex flex-col items-center gap-[60px] sm:gap-[80px] py-[45px] sm:py-[112px] text-center">
          <div className="flex flex-col gap-[10px] w-[300px] sm:w-[600px]">
            <h6 className="text-[14px] font-bold text-[#252B42]">
              VISIT OUR OFFICE
            </h6>
            <h2 className="text-[40px] font-bold text-[#252B42]">
              We help small businesses with big ideas
            </h2>
          </div>
          <div className="flex max-sm:flex-col items-center">
            <div className="w-[330px] h-[390px] sm:h-[400px] bg-[#ffffff] flex flex-col items-center sm:justify-center gap-[15px] py-[50px] px-[45px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="w-[72px] h-[72px]">
                <Image
                  src="contact1.svg"
                  alt="Contact"
                  width={72}
                  height={72}
                />
              </div>
              <div>
                <h6 className="text-[14px] font-bold text-[#252B42]">
                  georgia.young@example.com
                </h6>
                <h6 className="text-[14px] font-bold text-[#252B42]">
                  georgia.young@ple.com
                </h6>
              </div>
              <h5 className="text-[16px] font-bold text-[#252B42]">
                Get Support
              </h5>
              <button className="py-[10px] sm:py-[15px] px-[20px] sm:px-[35px] rounded-[5px] sm:rounded-[37px] border-[1px] border-[#23A6F0] text-[#23A6F0] text-[14px] font-bold">
                Submit Request
              </button>
            </div>
            <div className="w-[330px] h-[400px] bg-[#252B42] flex flex-col items-center justify-center gap-[15px] py-[50px] px-[45px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="w-[51px] h-[67px]">
                <Image src="map.svg" alt="Contact" width={51} height={67} />
              </div>
              <div>
                <h6 className="text-[14px] font-semibold text-[#ffffff]">
                  georgia.young@example.com
                </h6>
                <h6 className="text-[14px] font-semibold text-[#ffffff]">
                  georgia.young@ple.com
                </h6>
              </div>
              <h5 className="text-[16px] font-bold text-[#ffffff]">
                Get Support
              </h5>
              <button className="py-[15px] px-[36px] rounded-[5px] sm:rounded-[37px] border-[1px] border-[#23A6F0] text-[#23A6F0] text-[14px] font-bold">
                Submit Request
              </button>
            </div>
            <div className="w-[330px] h-[400px] bg-[#ffffff] flex flex-col items-center justify-center gap-[15px] py-[50px] px-[45px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
              <div className="w-[72px] h-[55px] sm:block hidden">
                <Image
                  src="message1.svg"
                  alt="Message"
                  width={72}
                  height={55}
                />
              </div>
              <div className="w-[69px] h-[72px] max-sm:block hidden">
                <Image src="share.svg" alt="Share" width={69} height={72} />
              </div>
              <div>
                <h6 className="text-[14px] font-bold text-[#252B42]">
                  georgia.young@example.com
                </h6>
                <h6 className="text-[14px] font-bold text-[#252B42]">
                  georgia.young@ple.com
                </h6>
              </div>
              <h5 className="text-[16px] font-bold text-[#252B42]">
                Get Support
              </h5>
              <button className="py-[15px] px-[36px] rounded-[5px] sm:rounded-[37px] border-[1px] border-[#23A6F0] text-[#23A6F0] text-[14px] font-bold">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center max-sm:py-[40px]">
        <div className="w-[72px]">
          <Image src="arrowRotate.svg" alt="Arrow" width={62} height={62} />
        </div>
        <div className="flex flex-col items-center gap-[30px] sm:gap-[16px] max-sm:pt-[20px] max-sm:pb-[80px] sm:py-[80px]">
          <h6 className="text-[16px] font-bold text-[#252B42]">
            WE Cant WAIT TO MEET YOU
          </h6>
          <h2 className="text-[58px] font-bold text-[#252B42]">Let’s Talk</h2>
          <button className="h-[52px] w-[186px] rounded-[5px] bg-[#23A6F0] text-[14px] font-bold text-[#ffffff] hover:text-[#23A6F0] hover:bg-[#ffffff] transition-all duration-200">
            Try it free now
          </button>
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
