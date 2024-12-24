"use client";
import Image from "next/image";
import { useState } from "react";

export default function About() {
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
        <div className="sm:w-[685px] px-[9%]">
          <div className="sm:w-[400px] w-[270px] max-sm:justify-center max-sm:items-center max-sm:text-center max-sm:h-[590px] flex flex-col sm:gap-[35px] gap-[40px]">
            <h5 className="sm:block hidden text-[16px] font-bold text-[#252B42]">
              ABOUT COMPANY
            </h5>
            <h1 className="sm:text-[58px] text-[40px] font-bold text-[#252B42]">
              ABOUT US
            </h1>
            <h4 className="sm:block hidden text-[20px] font-medium text-[#737373]">
              We know how large objects will act, but things on a small scale
            </h4>
            <h4 className="max-sm:block hidden text-[20px] font-medium text-[#737373]">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </h4>
            <button className="h-[52px] w-[195px] bg-[#23A6F0] hover:bg-[#ffffff] px-[40px] py-[15px] rounded-[5px] text-[14px] text-[#FFFFFF] hover:text-[#23A6F0] transition-all duration-200">
              Get Quote Now
            </button>
          </div>
        </div>
        <div className="shoppingGirl"></div>
      </div>
      <div className="flex justify-center">
        <div className="sm:h-[236px] h-[500px] sm:w-[1020px] flex max-sm:flex-col items-center justify-between py-[80px] max-sm:gap-[60px] sm:py-6">
          <div className="flex gap-[60px]">
            <div className="sm:w-[400px] w-[300px] flex flex-col gap-[24px] max-sm:text-center">
              <p className="text-[14px] font-medium text-[#E74040]">
                Problems trying
              </p>
              <h2 className="text-[24px] font-bold text-[#252B42]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent.
              </h2>
            </div>
          </div>
          <div className="sm:w-[545px] w-[340px]">
            <p className="text-[14px] font-medium text-[#737373]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[1050px] max-sm:h-[1000px] py-[80px] flex max-sm:flex-col sm:justify-around max-sm:gap-[100px]">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[58px] font-bold text-[#252B42]">15K</h1>
            <h5 className="text-[16px] font-bold text-[#737373]">
              Happy Customers
            </h5>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[58px] font-bold text-[#252B42]">150K</h1>
            <h5 className="text-[16px] font-bold text-[#737373]">
              Monthly Visitors
            </h5>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[58px] font-bold text-[#252B42]">15</h1>
            <h5 className="text-[16px] font-bold text-[#737373]">
              Countries Worldwide
            </h5>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[58px] font-bold text-[#252B42]">100+</h1>
            <h5 className="text-[16px] font-bold text-[#737373]">
              Top Partners
            </h5>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-[477px] sm:h-[765px]">
        <div className="videoCard flex justify-center items-center sm:rounded-[20px] rounded-[12px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
          <button className="sm:h-[92px] sm:w-[92px] h-[57px] w-[57px] rounded-[50%] bg-[#23A6F0] flex justify-center items-center hover:scale-110 transition ease-in-out duration-300">
            <Image
              src="play1.svg"
              alt="Play"
              width={20}
              height={22}
              className="sm:block hidden"
            />
            <Image
              src="play2.svg"
              alt="Play"
              width={13}
              height={14}
              className="max-sm:block hidden"
            />
          </button>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="flex flex-col sm:gap-[112px] sm:py-[112px] py-[30px]">
          <div className="flex justify-center">
            <div className="flex flex-col gap-[10px] text-center w-[310px] sm:w-[470px] max-sm:py-[45px]">
              <h2 className="text-[40px] font-bold text-[#252B42]">
                Meet Our Team
              </h2>
              <p className="text-[14px] font-medium text-[#737373]">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>
          </div>
          <div className="flex max-sm:flex-col gap-[30px]">
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
                    width={23}
                    height={23}
                    className="sm:block hidden"
                  />
                  <Image
                    src="face1.svg"
                    alt="Facebook"
                    width={25}
                    height={24}
                    className="max-sm:block hidden"
                  />
                  <Image
                    src="insta.svg"
                    alt="Instagram"
                    width={22}
                    height={23}
                    className="sm:block hidden"
                  />
                  <Image
                    src="insta1.svg"
                    alt="Instagram"
                    width={25}
                    height={24}
                    className="max-sm:block hidden"
                  />
                  <Image
                    src="twt.svg"
                    alt="Twitter"
                    width={22}
                    height={23}
                    className="sm:block hidden"
                  />
                  <Image
                    src="twt1.svg"
                    alt="Twitter"
                    width={25}
                    height={24}
                    className="max-sm:block hidden"
                  />
                </div>
              </div>
            </div>
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
                    width={23}
                    height={23}
                    className="sm:block hidden"
                  />
                  <Image
                    src="face1.svg"
                    alt="Facebook"
                    width={25}
                    height={24}
                    className="max-sm:block hidden"
                  />
                  <Image
                    src="insta.svg"
                    alt="Instagram"
                    width={22}
                    height={23}
                    className="sm:block hidden"
                  />
                  <Image
                    src="insta1.svg"
                    alt="Instagram"
                    width={25}
                    height={24}
                    className="max-sm:block hidden"
                  />
                  <Image
                    src="twt.svg"
                    alt="Twitter"
                    width={22}
                    height={23}
                    className="sm:block hidden"
                  />
                  <Image
                    src="twt1.svg"
                    alt="Twitter"
                    width={25}
                    height={24}
                    className="max-sm:block hidden"
                  />
                </div>
              </div>
            </div>
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
                    width={23}
                    height={23}
                    className="sm:block hidden"
                  />
                  <Image
                    src="face1.svg"
                    alt="Facebook"
                    width={25}
                    height={24}
                    className="max-sm:block hidden"
                  />
                  <Image
                    src="insta.svg"
                    alt="Instagram"
                    width={22}
                    height={23}
                    className="sm:block hidden"
                  />
                  <Image
                    src="insta1.svg"
                    alt="Instagram"
                    width={25}
                    height={24}
                    className="max-sm:block hidden"
                  />
                  <Image
                    src="twt.svg"
                    alt="Twitter"
                    width={22}
                    height={23}
                    className="sm:block hidden"
                  />
                  <Image
                    src="twt1.svg"
                    alt="Twitter"
                    width={25}
                    height={24}
                    className="max-sm:block hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#FAFAFA]">
        <div className="flex flex-col gap-[24px] sm:py-[80px] py-[120px]">
          <div className="flex flex-col items-center gap-[30px] text-center max-sm:w-[310px]">
            <h2 className="text-[40px] font-bold text-[#252B42]">
              Big Companies Are Here
            </h2>
            <p className="text-[14px] font-medium text-[#737373] sm:w-[480px]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="flex max-sm:flex-col justify-between items-center gap-[60px] sm:gap-[30px] py-[50px] sm:w-[1055px]">
            <div>
              <Image src="client1.svg" alt="Client 1" width={150} height={50} />
            </div>
            <div>
              <Image
                src="client2.svg"
                alt="Client 2"
                width={140}
                height={100}
              />
            </div>
            <div>
              <Image
                src="client3.svg"
                alt="Client 3"
                width={150}
                height={110}
              />
            </div>
            <div>
              <Image src="client4.svg" alt="Client 4" width={150} height={60} />
            </div>
            <div>
              <Image src="client5.svg" alt="Client 5" width={153} height={92} />
            </div>
            <div>
              <Image
                src="client6.svg"
                alt="Client 6"
                width={150}
                height={140}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:justify-between justify-center bg-[#2A7CC7]">
        <div className="sm:py-[112px] py-[30px] max-sm:h-[520px] flex items-center justify-center gap-[36px] sm:px-[13%]">
          <div className="sm:w-[460px] w-[250px] max-sm:text-center flex flex-col max-sm:items-center gap-[24px]">
            <h5 className="text-[16px] font-bold text-[#FFFFFF]">
              WORK WITH US
            </h5>
            <h2 className="text-[40px] font-bold text-[#FFFFFF]">
              Now Let’s grow Yours
            </h2>
            <p className="text-[14px] font-medium text-[#FFFFFF]">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th
            </p>
            <button className="text-[14px] flex justify-center items-center font-bold text-[#FAFAFA] hover:text-[#2A7CC7] rounded-[5px] w-[130px] h-[50px] py-[15px] px-[40px] hover:bg-[#fafafa] border-[#FAFAFA] hover:border-[#2A7CC7] border-[1px] transition-all duration-200">
              Button
            </button>
          </div>
        </div>
        <div className="testimonials sm:block hidden"></div>
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
