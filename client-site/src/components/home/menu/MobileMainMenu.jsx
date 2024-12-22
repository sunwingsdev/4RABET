import React, { useEffect } from "react";
import { BiBookBookmark } from "react-icons/bi";
import { BsGridFill } from "react-icons/bs";
import { CgLivePhoto } from "react-icons/cg";
import { FaApple, FaAvianex, FaUserTag } from "react-icons/fa";
import { FaBaseballBatBall } from "react-icons/fa6";
import { GiDonut, GiRocketThruster } from "react-icons/gi";
import { HiX } from "react-icons/hi";
import { IoIosFootball, IoLogoAndroid } from "react-icons/io";
import { LiaProceduresSolid } from "react-icons/lia";
import { LuMonitorStop, LuTableColumnsSplit } from "react-icons/lu";
import { PiNumberCircleSevenFill } from "react-icons/pi";
import { Link } from "react-router";

const MobileMainMenu = ({ isMenuOpen, toggleMenu, openDepositModal }) => {
  useEffect(() => {
    // Prevent body scrolling when the menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div
      className={`fixed top-0 left-0 h-full w-[70%] sm:w-1/2 bg-[#152133] z-50 py-6 transform overflow-y-auto ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}
    >
      {/* Close Button */}
      <button
        onClick={toggleMenu}
        className="text-white absolute top-3 right-3"
      >
        <HiX size={28} />
      </button>

      {/* Deposit Button */}
      <div className="px-5">
        <button
          onClick={openDepositModal}
          className="mt-6 w-full py-2 rounded-md text-sm font-bold text-white bg-blue-500"
        >
          DEPOSIT
        </button>
      </div>

      {/* Application Section */}
      <p className="flex justify-between gap-5 text-xs font-bold items-center text-white bg-[#18263a] mt-3 py-3 px-5">
        OUR APPLICATION
        <div className="flex gap-3 items-center text-blue-500">
          <FaApple className="text-3xl" />
          <div className="relative flex items-center justify-center">
            <IoLogoAndroid className="text-3xl" />
            <p className="absolute bg-yellow-400 text-black px-1.5 py-0.5 text-[10px] -bottom-1 rounded-sm">
              NEW
            </p>
          </div>
        </div>
      </p>

      {/* Menu List */}
      <ul className="font-bold text-white">
        {/* Example of Menu Items */}
        <li>
          <Link to="/">
            <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
              <BsGridFill size={20} className="text-blue-500" />
              Main
            </p>
          </Link>
        </li>
        <li>
          <Link to="/live">
            <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
              <LuMonitorStop size={20} className="text-blue-500" />
              LIVE
            </p>
          </Link>
        </li>
        <li>
          <Link to="/sports">
            <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
              <LuTableColumnsSplit size={20} className="text-blue-500" />
              SPORTS
            </p>
          </Link>
        </li>
        <li>
          <Link to="/cricket">
            <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
              <FaBaseballBatBall size={20} className="text-blue-500" />
              Cricket
            </p>
          </Link>
        </li>
        <li>
          <Link to="/casino">
            <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
              <PiNumberCircleSevenFill size={20} className="text-blue-500" />
              Casino
            </p>
          </Link>
        </li>
        <li>
          <Link to="/live-dealers">
            <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
              <CgLivePhoto size={20} className="text-blue-500" />
              Live Dealers
            </p>
          </Link>
        </li>
        <li>
          <Link to="/tv-games">
            <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
              <LuMonitorStop size={20} className="text-blue-500" />
              TV Games
            </p>
          </Link>
        </li>
        <li>
          <Link to="/auiatior">
            <p className="flex gap-5 items-center text-red-600 hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
              <GiRocketThruster size={20} className="text-red-600" />
              Aviator
            </p>
          </Link>
        </li>
        <li>
          <Link to="/jetx">
            <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
              <LiaProceduresSolid size={20} className="text-blue-500" />
              JetX
            </p>
          </Link>
        </li>
        <li>
          <Link to="/aviatrix">
            <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
              <FaAvianex size={20} className="text-blue-500" />
              AviatriX
            </p>
          </Link>
        </li>
        <li>
          <Link to="/esport">
            <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
              <IoIosFootball size={20} className="text-blue-500" />
              eSport
            </p>
          </Link>
        </li>
        <li>
          <Link to="/bonuses">
            <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
              <GiDonut size={20} className="text-blue-500" />
              Bonuses
            </p>
          </Link>
        </li>
        <li>
          <Link to="/rules">
            <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
              <FaUserTag size={20} className="text-blue-500" />
              Rules
            </p>
          </Link>
        </li>
        <li>
          <Link to="/tutorials">
            <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
              <BiBookBookmark size={20} className="text-blue-500" />
              Tutorials
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMainMenu;
