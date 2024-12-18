import { Link } from "react-router";
import logo from "../../../assets/logo.svg";
import flag from "../../../assets/EN.svg";
import { topMenu } from "../../MenuItems";
import { useState } from "react";
import { FaApple, FaAvianex, FaTimes, FaUserTag } from "react-icons/fa"; // Close Icon Import
import { FcGoogle } from "react-icons/fc"; // Google Icon Import
import { MdOutlineMailOutline, MdPhoneAndroid } from "react-icons/md";
import { HiMenuAlt1 } from "react-icons/hi";
import { TiMessages } from "react-icons/ti";
import { TbRobot } from "react-icons/tb";
import { HiX } from "react-icons/hi";
import { BsGridFill } from "react-icons/bs";
import { LuMonitorStop, LuTableColumnsSplit } from "react-icons/lu";
import { BiBookBookmark } from "react-icons/bi";
import { GiDonut, GiRocketThruster } from "react-icons/gi";
import { IoIosFootball } from "react-icons/io";
import { LiaProceduresSolid } from "react-icons/lia";
import { CgLivePhoto } from "react-icons/cg";
import { PiNumberCircleSevenFill } from "react-icons/pi";
import { FaBaseballBatBall } from "react-icons/fa6";

const TopBarMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("email");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openRegistrationModal = () => setIsRegistrationOpen(true);
  const closeRegistrationModal = () => setIsRegistrationOpen(false);

  const [selectedCountry, setSelectedCountry] = useState({
    name: "Bangladesh",
    flag: "https://flagcdn.com/w320/bd.png", // বাংলাদেশের পতাকা
  });

  const countries = [
    { name: "Bangladesh", flag: "https://flagcdn.com/w320/bd.png" },
    { name: "India", flag: "https://flagcdn.com/w320/in.png" },
    { name: "United States", flag: "https://flagcdn.com/w320/us.png" },
    { name: "United Kingdom", flag: "https://flagcdn.com/w320/gb.png" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  // side mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#18263AE6] border-b border-[#293b55]">
      <div className="hidden lg:flex justify-between items-center gap-2">
        <div className="flex items-center gap-6 xl:gap-10 2xl:gap-16">
          <div className="flex items-center gap-2 pl-5 xl:pl-3 pr-3">
            <Link to={"/"}>
              <img className="w-36 xl:w-44 m-auto" src={logo} alt="" />
            </Link>
            <Link to={"/"}>
              <img
                className="w-7 m-auto rounded-md object-cover"
                src="https://ifrd.4rabetsite25.com/img/svgflags/BN.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="flex gap-4 xl:gap-6 text-white font-bold text-base overflow-x-auto">
            {topMenu.map((menu) => (
              <Link key={menu.id} to={menu.link}>
                <p className="py-4 border-b-2 hover:text-[#1976d2] border-[#18263AE6] hover:border-[#1976d2] duration-300 whitespace-nowrap">
                  {menu.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 xl:gap-6">
          <div className="flex items-center gap-2 text-white pl-2 xl:pl-4 2xl:pl-6 border-l border-[#293b55]">
            <Link onClick={openModal}>
              <p className="text-sm font-bold px-4 xl:px-6 py-2 rounded-full bg-[#2B81D6] hover:bg-[#4ba2f8] duration-300 whitespace-nowrap">
                SIGN IN
              </p>
            </Link>
            <Link onClick={openRegistrationModal}>
              <p className="text-sm font-bold px-5 xl:px-6 py-2 rounded-full bg-[#F44336] hover:bg-[#cf4137] duration-300">
                REGISTRATION
              </p>
            </Link>
          </div>

          <div className="w-16 h-14 text-white border-l border-[#293b55]">
            <Link>
              <img
                className="p-4 px-5 w-16 h-14 rounded-full object-cover"
                src={flag}
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div className="px-4 sm:px-6 lg:hidden">
        <div className="flex items-center justify-between py-3">
          <div className="text-white flex gap-3 sm:gap-4 items-center">
            <button onClick={toggleMenu}>
              <HiMenuAlt1 size={36} />
            </button>
            <TiMessages size={25} className="text-blue-500" />
          </div>
          <div className="flex items-center gap-2 pl-5 xl:pl-3 pr-3">
            <Link to={"/"}>
              <img className="w-28 m-auto" src={logo} alt="" />
            </Link>
            <Link to={"/"}>
              <img
                className="w-7 m-auto rounded-md object-cover"
                src="https://ifrd.4rabetsite25.com/img/svgflags/BN.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="text-white flex gap-1 items-center">
            <Link>
              <FaApple size={28} />
            </Link>
            <Link>
              <TbRobot size={28} />
            </Link>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          ></div>
        )}

        {/* Side Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-[70%] sm:w-1/2 bg-[#152133] z-50 py-6 transform overflow-y-auto ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300`}
        >
          <button
            onClick={toggleMenu}
            className="text-white absolute top-3 right-3"
          >
            <HiX size={28} />
          </button>
          <div className="px-5">
            <button className="mt-6 w-full py-2 rounded-md text-sm font-bold text-white bg-blue-500">
              DEPOSIT
            </button>
          </div>
          <p className="flex justify-between gap-5 text-xs font-bold items-center text-white bg-[#18263a] mt-3 py-3 px-5">
            OUR APPLICATION
            <div className="flex gap-1 items-center text-blue-500">
              <FaApple size={22} />
              <TbRobot size={22} />
            </div>
          </p>
          <ul className="font-bold text-white">
            <li>
              <Link to="/">
                <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
                  <BsGridFill size={20} className="text-blue-500" />
                  Main
                </p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
                  <LuMonitorStop size={20} className="text-blue-500" />
                  LIVE
                </p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
                  <LuTableColumnsSplit size={20} className="text-blue-500" />
                  SPORTS
                </p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
                  <FaBaseballBatBall size={20} className="text-blue-500" />
                  Cricket
                </p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
                  <PiNumberCircleSevenFill
                    size={20}
                    className="text-blue-500"
                  />
                  Casino
                </p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
                  <CgLivePhoto size={20} className="text-blue-500" />
                  Live Dealers
                </p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
                  <LuMonitorStop size={20} className="text-blue-500" />
                  TV Games
                </p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p className="flex gap-5 items-center text-red-600 hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
                  <GiRocketThruster size={20} className="text-red-600" />
                  Auiator
                </p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
                  <LiaProceduresSolid size={20} className="text-blue-500" />
                  JetX
                </p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
                  <FaAvianex size={20} className="text-blue-500" />
                  AviatriX
                </p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
                  <IoIosFootball size={20} className="text-blue-500" />
                  eSport
                </p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
                  <GiDonut size={20} className="text-blue-500" />
                  Bonuses
                </p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
                  <FaUserTag size={20} className="text-blue-500" />
                  Rules
                </p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
                  <BiBookBookmark size={20} className="text-blue-500" />
                  Tutorials
                </p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2 text-sm font-bold text-white w-full">
          <Link onClick={openModal} className="w-1/2">
            <p className="w-full py-2 rounded-md bg-[#2B81D6] hover:bg-[#4ba2f8] duration-300 text-center">
              SIGN IN
            </p>
          </Link>
          <Link onClick={openRegistrationModal} className="w-1/2">
            <p className="w-full py-2 rounded-md bg-[#4caf50] hover:bg-[#388f3b] duration-300 text-center">
              REGISTRATION
            </p>
          </Link>
        </div>
      </div>

      {/* Sign In modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="text-white bg-[#152234] w-[900px] h-[700px] rounded-lg shadow-lg flex overflow-hidden relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-[#59647a] text-2xl hover:text-blue-600 duration-300"
            >
              <FaTimes />
            </button>

            {/* Left Section - Image */}
            <div className="w-1/2">
              <img
                className="w-full h-full object-cover"
                src="https://ifrd.4rabetsite25.com/img/registration-modal-HI.webp"
                alt=""
              />
            </div>

            {/* Right Section - Tabs and Sign In Form */}
            <div className="w-1/2 p-8 flex flex-col">
              <h2 className="text-2xl font-semibold mb-6 text-center text-white">
                LOGIN
              </h2>

              {/* Tabs */}
              <div className="flex gap-3 mb-4">
                <button
                  className={`flex justify-center items-center gap-2 w-1/2 text-center py-2 font-semibold bg-[#1c2d44] rounded-lg ${
                    activeTab === "email"
                      ? "bg-blue-600 text-white rounded-lg"
                      : "text-[#59647a]"
                  }`}
                  onClick={() => setActiveTab("email")}
                >
                  <MdOutlineMailOutline size={28} />
                  Email
                </button>
                <button
                  className={`flex justify-center items-center gap-2 w-1/2 text-center py-2 font-semibold bg-[#1c2d44] rounded-lg ${
                    activeTab === "phone"
                      ? "bg-blue-600 text-white rounded-lg"
                      : "text-[#59647a]"
                  }`}
                  onClick={() => setActiveTab("phone")}
                >
                  <MdPhoneAndroid size={28} />
                  Phone
                </button>
              </div>

              {/* Form Content */}
              {activeTab === "email" && (
                <form className="flex flex-col">
                  <input
                    type="email"
                    className="w-full mb-4 px-5 py-3 bg-[#1c2d44] rounded-lg focus:outline-none focus:ring-0"
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    className="w-full mb-2 px-5 py-3 bg-[#1c2d44] rounded-lg focus:outline-none focus:ring-0"
                    placeholder="Password"
                  />
                  <div className="text-center mb-40">
                    <p className="text-sm font-semibold text-[#5c7391]">
                      Don’t remember?{" "}
                      <Link className="text-white text-base font-medium underline">
                        Recover a password
                      </Link>
                    </p>
                  </div>
                  <div className="text-center mb-2">
                    <p className="text-sm font-semibold text-[#5c7391]">
                      Don{"'"}t have an account?
                    </p>
                    <Link>
                      <p className="text-sm font-semibold underline">Sign in</p>
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-sm font-bold bg-blue-500 text-white py-3 rounded-2xl hover:bg-blue-600 duration-300"
                  >
                    SIGN IN
                  </button>
                </form>
              )}

              {activeTab === "phone" && (
                <form className="flex flex-col">
                  <input
                    type="number"
                    className="w-full mb-4 px-5 py-3 bg-[#1c2d44] rounded-lg focus:outline-none focus:ring-0"
                    placeholder="Phone Number"
                  />
                  <input
                    type="password"
                    className="w-full mb-2 px-5 py-3 bg-[#1c2d44] rounded-lg focus:outline-none focus:ring-0"
                    placeholder="Password"
                  />
                  <div className="text-center mb-40">
                    <p className="text-sm font-semibold text-[#5c7391]">
                      Don’t remember?{" "}
                      <Link className="text-white text-base font-medium underline">
                        Recover a password
                      </Link>
                    </p>
                  </div>
                  <div className="text-center mb-2">
                    <p className="text-sm font-semibold text-[#5c7391]">
                      Don{"'"}t have an account?
                    </p>
                    <Link>
                      <p className="text-sm font-semibold underline">Sign in</p>
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-sm font-bold bg-blue-500 text-white py-3 rounded-2xl hover:bg-blue-600 duration-300"
                  >
                    SIGN IN
                  </button>
                </form>
              )}

              {/* or */}
              <div className="flex justify-center items-center gap-2 mt-5">
                <p className="w-full h-1 border-b border-[#2d3949]"></p>
                <p className="text-sm font-bold text-white">OR</p>
                <p className="w-full h-1 border-b border-[#2d3949]"></p>
              </div>

              {/* Google Login */}
              <button className="flex items-center gap-20 mt-5 text-sm font-bold bg-blue-500 hover:bg-blue-600 text-white p-1 rounded-3xl duration-300">
                <div className="text-start p-2 bg-white rounded-full">
                  <FcGoogle className="text-xl" />
                </div>
                <p className="">Continue with Google</p>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Registration Modal */}
      {isRegistrationOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="text-white bg-[#152234] w-[900px] h-[700px] rounded-lg shadow-lg flex overflow-hidden relative">
            {/* Close Button */}
            <button
              onClick={closeRegistrationModal}
              className="absolute top-4 right-4 text-[#59647a] text-2xl hover:text-blue-600 duration-300"
            >
              <FaTimes />
            </button>

            {/* Modal Content */}
            <div className="w-1/2">
              <img
                className="w-full h-full object-cover"
                src="https://ifrd.4rabetsite25.com/img/registration-modal-HI.webp"
                alt="Register"
              />
            </div>
            <div className="w-1/2 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-4 bg-[#212d43] rounded-xl mb-4">
                <div className="bg-[#ffb131] px-1 rounded-xl">
                  <img
                    className="w-16"
                    src="https://ifrd.4rabetsite25.com/img/gifs/gift.png"
                    alt=""
                  />
                </div>
                <p className="text-base font-bold text-[#ffb131]">
                  6000 BDT ON FIRST <br /> DEPOSIT
                </p>
              </div>
              <form>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full mb-4 px-5 py-2 bg-[#1c2d44] rounded-lg focus:outline-none"
                />
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="w-full mb-4 px-5 py-2 bg-[#1c2d44] rounded-lg focus:outline-none"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full mb-4 px-5 py-2 bg-[#1c2d44] rounded-lg focus:outline-none"
                />
                <div className="relative mb-4">
                  <button
                    type="button"
                    onClick={toggleDropdown}
                    className="w-full flex items-center justify-between bg-[#1d2b3d] text-white px-4 py-2 rounded-full border border-[#283548] focus:outline-none focus:ring-[#283548]"
                  >
                    <div className="flex items-center">
                      {selectedCountry.flag && (
                        <img
                          src={selectedCountry.flag}
                          alt={selectedCountry.name}
                          className="w-6 h-4 mr-2"
                        />
                      )}
                      {selectedCountry.name}
                    </div>
                    <span>{isOpen ? "▲" : "▼"}</span>
                  </button>

                  {isOpen && (
                    <ul className="absolute z-10 w-full text-white bg-[#1d2b3d] border border-[#283548] rounded-lg mt-1 max-h-60 overflow-y-auto">
                      {countries.map((country) => (
                        <li
                          key={country.name}
                          onClick={() => handleSelect(country)}
                          className="flex items-center px-4 py-2 hover:bg-[#283548] cursor-pointer"
                        >
                          <img
                            src={country.flag}
                            alt={country.name}
                            className="w-6 h-4 mr-2"
                          />
                          {country.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full text-sm font-bold bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 duration-300"
                >
                  SIGN UP
                </button>
              </form>
              {/* or */}
              <div className="flex justify-center items-center gap-2 mt-3">
                <p className="w-full h-1 border-b border-[#2d3949]"></p>
                <p className="text-sm font-bold text-white">OR</p>
                <p className="w-full h-1 border-b border-[#2d3949]"></p>
              </div>

              {/* Google Login */}
              <button className="flex items-center gap-20 mt-3 text-sm font-bold bg-blue-500 hover:bg-blue-600 text-white p-1 rounded-3xl duration-300">
                <div className="text-start p-2 bg-white rounded-full">
                  <FcGoogle className="text-xl" />
                </div>
                <p className="">Continue with Google</p>
              </button>
              <div className="text-center mt-6 mb-2">
                <p className="text-[13px] font-semibold text-[#5c7391]">
                  I confirm all the{" "}
                  <Link className="text-white text-xs underline">
                    Terms of user agreement
                  </Link>{" "}
                  and that I am over 18
                </p>
              </div>
              <p className=" text-center text-sm font-semibold text-[#5c7391]">
                Already registered?{" "}
                <Link className="text-white text-base underline">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBarMenu;
