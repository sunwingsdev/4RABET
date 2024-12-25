import React, { useContext, useEffect } from "react";
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
import { AuthContext } from "../../../providers/AuthProvider";
import { useToasts } from "react-toast-notifications";
import ApiConnectionModal from "../../shared/ApiConnectionModal";

const MobileMainMenu = ({ isMenuOpen, toggleMenu, openDepositModal }) => {
  const { user, setIsApiModalOpen, setIsModalOpen, isApiModalOpen } =
    useContext(AuthContext);
  const { addToast } = useToasts();

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

  const handleMenuSelect = () => {
    if (!user) {
      setIsModalOpen(true);
      addToast("Please login first", {
        appearance: "error",
        autoDismiss: true,
      });
    } else {
      setIsApiModalOpen(true);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-[70%] sm:w-1/2 z-50 bg-[#152133] py-6 transform overflow-y-auto ${
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

      {user && (
        <div className=" py-4 px-2 mx-2 bg-gradient-to-l from-blue-300 to-blue-600 flex flex-row items-center justify-between rounded-md">
          <div className="flex flex-row items-center gap-2">
            <img
              src="https://ifrd.4rabetsite25.com/img/main/top-sections/cup.svg"
              alt=""
            />
            <p className="text-white text-lg font-semibold">Rewards</p>
          </div>
          <div className="px-3 py-2 bg-yellow-300 rounded-md">
            <p className="text-black font-bold">Open</p>
          </div>
        </div>
      )}

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
          <div onClick={handleMenuSelect}>
            <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
              <LuMonitorStop size={20} className="text-blue-500" />
              LIVE
            </p>
          </div>
        </li>
        <li>
          <div onClick={handleMenuSelect}>
            <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
              <LuTableColumnsSplit size={20} className="text-blue-500" />
              SPORTS
            </p>
          </div>
        </li>
        <li>
          <div onClick={handleMenuSelect}>
            <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
              <FaBaseballBatBall size={20} className="text-blue-500" />
              Cricket
            </p>
          </div>
        </li>
        <li>
          <div onClick={handleMenuSelect}>
            <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
              <PiNumberCircleSevenFill size={20} className="text-blue-500" />
              Casino
            </p>
          </div>
        </li>
        <li>
          <div onClick={handleMenuSelect}>
            <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
              <CgLivePhoto size={20} className="text-blue-500" />
              Live Dealers
            </p>
          </div>
        </li>
        <li>
          <div onClick={handleMenuSelect}>
            <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
              <LuMonitorStop size={20} className="text-blue-500" />
              TV Games
            </p>
          </div>
        </li>
        <li>
          <div onClick={handleMenuSelect}>
            <p className="flex gap-5 items-center text-red-600 hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
              <GiRocketThruster size={20} className="text-red-600" />
              Aviator
            </p>
          </div>
        </li>
        <li>
          <div onClick={handleMenuSelect}>
            <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
              <LiaProceduresSolid size={20} className="text-blue-500" />
              JetX
            </p>
          </div>
        </li>
        <li>
          <div onClick={handleMenuSelect}>
            <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
              <FaAvianex size={20} className="text-blue-500" />
              AviatriX
            </p>
          </div>
        </li>
        <li>
          <div onClick={handleMenuSelect}>
            <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
              <IoIosFootball size={20} className="text-blue-500" />
              eSport
            </p>
          </div>
        </li>
        <li>
          <div onClick={handleMenuSelect}>
            <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
              <GiDonut size={20} className="text-blue-500" />
              Bonuses
            </p>
          </div>
        </li>
        <li>
          <div onClick={handleMenuSelect}>
            <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
              <FaUserTag size={20} className="text-blue-500" />
              Rules
            </p>
          </div>
        </li>
        <li>
          <div onClick={handleMenuSelect}>
            <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
              <BiBookBookmark size={20} className="text-blue-500" />
              Tutorials
            </p>
          </div>
        </li>
      </ul>
      {isApiModalOpen && (
        <ApiConnectionModal closeApiModal={() => setIsApiModalOpen(false)} />
      )}
    </div>
  );
};

export default MobileMainMenu;
