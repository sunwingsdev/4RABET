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

  return (
    <div className="flex justify-between items-center gap-10 bg-[#18263AE6] border-b border-[#293b55]">
      <div className="flex items-center gap-16">
        <div className="pl-3 flex items-center gap-2">
          <Link to={"/"}>
            <img className="w-44" src={logo} alt="" />
          </Link>
          <Link to={"/"}>
            <img
              className="w-7 rounded-md object-cover"
              src="https://ifrd.4rabetsite25.com/img/svgflags/BN.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="flex gap-6 text-white font-bold text-base">
          {topMenu.map((menu) => (
            <Link key={menu.id} to={menu.link}>
              <p className="py-4 border-b-2 hover:text-[#1976d2] border-[#18263AE6] hover:border-[#1976d2] duration-300">
                {menu.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-white pl-6 border-l border-[#293b55]">
          <Link onClick={openModal}>
            <p className="text-sm font-bold px-6 py-2 rounded-full bg-[#2B81D6] hover:bg-[#4ba2f8] duration-300">
              SIGN IN
            </p>
          </Link>
          <Link onClick={openRegistrationModal}>
            <p className="text-sm font-bold px-6 py-2 rounded-full bg-[#F44336] hover:bg-[#cf4137] duration-300">
              REGISTRATION
            </p>
          </Link>
        </div>

        <div className="text-white border-l border-[#293b55]">
          <Link>
            <img
              className="p-4 px-5 w-16 h-14 rounded-full object-cover"
              src={flag}
              alt=""
            />
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
