import { Link } from "react-router";
import logo from "../../../assets/logo.svg";
import flag from "../../../assets/EN.svg";
import { topMenu } from "../../MenuItems";
import { useState } from "react";
import SignInModal from "../../shared/modal/SignInModal";
import RegistrationModal from "../../shared/modal/RegistrationModal";
import crashImg from "../../../assets/images/offers/crash.png";
import gearImg from "../../../assets/images/offers/gear.png";
import holdAndWinImg from "../../../assets/images/offers/holdAndWin.png";
import ladyImg from "../../../assets/images/offers/lady.png";
import sportImg from "../../../assets/images/offers/sport.jpg";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { TiMessages } from "react-icons/ti";
import { FaApple, FaAvianex, FaUserTag } from "react-icons/fa";
import { TbRobot } from "react-icons/tb";
import { BsGridFill } from "react-icons/bs";
import { LuMonitorStop, LuTableColumnsSplit } from "react-icons/lu";
import { FaBaseballBatBall } from "react-icons/fa6";
import { PiNumberCircleSevenFill } from "react-icons/pi";
import { CgLivePhoto } from "react-icons/cg";
import { GiDonut, GiRocketThruster } from "react-icons/gi";
import { LiaProceduresSolid } from "react-icons/lia";
import { IoIosFootball } from "react-icons/io";
import { BiBookBookmark } from "react-icons/bi";

const TopBarMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openRegistrationModal = () => setIsRegistrationOpen(true);
  const closeRegistrationModal = () => setIsRegistrationOpen(false);

  const [selectedCountry, setSelectedCountry] = useState({
    name: "Bangladesh",
    flag: "https://flagcdn.com/w320/bd.png", // বাংলাদেশের পতাকা
  });

  const currencies = [
    { symbol: "BDT", label: "BDT", flag: "https://flagcdn.com/w320/bd.png" },
    { symbol: "\u20B9", label: "INR", flag: "https://flagcdn.com/w320/in.png" },
    { symbol: "FBu", label: "BIF", flag: "https://flagcdn.com/w320/bi.png" },
    { symbol: "R$", label: "BRL", flag: "https://flagcdn.com/w320/br.png" },
    { symbol: "CDF", label: "CDF", flag: "https://flagcdn.com/w320/cd.png" },
    { symbol: "GHC", label: "GHS", flag: "https://flagcdn.com/w320/gh.png" },
    {
      symbol: "\u0DBB\u0DD4",
      label: "LKR",
      flag: "https://flagcdn.com/w320/lk.png",
    },
    { symbol: "K", label: "MMK", flag: "https://flagcdn.com/w320/mm.png" },
    { symbol: "MT", label: "MZN", flag: "https://flagcdn.com/w320/mz.png" },
    {
      symbol: "\u0930\u0941.",
      label: "NPR",
      flag: "https://flagcdn.com/w320/np.png",
    },
    { symbol: "\u20B1", label: "PHP", flag: "https://flagcdn.com/w320/ph.png" },
    { symbol: "FRw", label: "RWF", flag: "https://flagcdn.com/w320/rw.png" },
    { symbol: "TSh", label: "TZS", flag: "https://flagcdn.com/w320/tz.png" },
  ];

  const offers = [
    {
      label: "Welcome Crash Bonus",
      value: "welcome_crash_bonus",
      img: crashImg,
    },
    {
      label: "Welcome Live Bonus",
      value: "welcome_live_bonus",
      img: ladyImg,
    },
    {
      label: "Welcome Slots Bonus",
      value: "welcome_slots_bonus",
      img: holdAndWinImg,
    },
    {
      label: "Sport Welcome Pack 700%",
      value: "sport_welcome_pack_700",
      img: sportImg,
    },
    {
      label: "Crash Welcome Pack 700%",
      value: "crash_welcome_pack_700",
      img: gearImg,
    },
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
          <div className="flex gap-4 xl:gap-6 text-white font-bold text-base overflow-x-auto scrollbar-hide">
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
      {isModalOpen && <SignInModal closeModal={closeModal} />}

      {/* Registration Modal */}
      {isRegistrationOpen && (
        <RegistrationModal
          closeRegistrationModal={closeRegistrationModal}
          toggleDropdown={toggleDropdown}
          selectedCountry={selectedCountry}
          isOpen={isOpen}
          currencies={currencies}
          offers={offers}
          handleSelect={handleSelect}
        />
      )}
    </div>
  );
};

export default TopBarMenu;
