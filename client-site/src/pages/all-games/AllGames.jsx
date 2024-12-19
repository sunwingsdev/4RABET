import TopSlider from "../../components/all-games/TopSlider";
import { CiSearch } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import PopularCategory from "../../components/all-games/PopularCategory";
import { FaGamepad } from "react-icons/fa";
import RabetExclusive from "../../components/all-games/RabetExclusive";
import NewGames from "../../components/all-games/NewGames";
import LiveGames from "../../components/all-games/LiveGames";
import SlotsGame from "../../components/all-games/SlotsGame";
import CrashGames from "../../components/all-games/CrashGames";
import LocalGames from "../../components/all-games/LocalGames";
import RouletteGames from "../../components/all-games/RouletteGames";
import FastGames from "../../components/all-games/FastGames";
import BaccaratGames from "../../components/all-games/BaccaratGames";
import BlackJackGames from "../../components/all-games/BlackJackGames";
import TableGames from "../../components/all-games/TableGames";
import VirtualSports from "../../components/all-games/VirtualSports";
import OtherGames from "../../components/all-games/OtherGames";
import MobileBannerBottom from "../../components/home/menu/MobileBannerBottom";
import { Link } from "react-router";

const AllGames = () => {
  const menuBannerBottom = [
    {
      title: "All Game",
      img: "https://ifrd.4rabetsite25.com/img/casino/allGames.png",
    },
    {
      title: "Popular",
      img: "https://ifrd.4rabetsite25.com/img/casino/popular.png",
    },
    {
      title: "4RABET Exclusives",
      img: "https://ifrd.4rabetsite25.com/img/casino/exclusives.png",
    },
    {
      title: "New Games",
      img: "https://ifrd.4rabetsite25.com/img/casino/new-games.png",
    },
    {
      title: "Live Games",
      img: "https://ifrd.4rabetsite25.com/img/casino/live.png",
    },
    {
      title: "Slots",
      img: "https://ifrd.4rabetsite25.com/img/casino/slots.png",
    },
    {
      title: "Crash Games",
      img: "https://ifrd.4rabetsite25.com/img/casino/crash.png",
    },
    {
      title: "Local Games",
      img: "https://ifrd.4rabetsite25.com/img/casino/local.png",
    },
    {
      title: "Fast Games",
      img: "https://ifrd.4rabetsite25.com/img/casino/fast.png",
    },
    {
      title: "Roulette",
      img: "https://ifrd.4rabetsite25.com/img/casino/roulette.png",
    },
    {
      title: "Baccarat",
      img: "https://ifrd.4rabetsite25.com/img/casino/baccarat.png",
    },
    {
      title: "Blackjack",
      img: "https://ifrd.4rabetsite25.com/img/casino/blackjack.png",
    },
    {
      title: "Table",
      img: "https://ifrd.4rabetsite25.com/img/casino/table.png",
    },
    {
      title: "Virtual Sports",
      img: "https://ifrd.4rabetsite25.com/img/casino/virtual_sports.png",
    },
    {
      title: "Other",
      img: "https://ifrd.4rabetsite25.com/img/casino/other.png",
    },
  ];
  return (
    <div className="bg-[#091222] pt-7 sm:pt-14 mt-[51px] lg:mt-0">
      <div className="bg-[#1c2d44] lg:flex flex-row items-center gap-2 py-2 px-6 lg:p-6 hidden">
        <FaGamepad className="text-3xl text-white" />{" "}
        <p className="text-lg xl:text-3xl text-white font-bold">All Games</p>
      </div>
      <div className="p-4">
        <div className="my-4 flex flex-row items-center gap-2 w-full lg:pr-16 sm:hidden">
          <label className="relative block w-full">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <CiSearch className="h-5 w-5 fill-slate-300" />
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block text-white bg-[#152436] w-full rounded-md py-2 pl-9 pr-3 shadow-sm outline-none sm:text-sm"
              placeholder="Search"
              type="text"
              name="search"
            />
          </label>
          <button className="p-2.5 w-fit bg-[#152436] rounded-md">
            <FaStar className="text-slate-400" />
          </button>
        </div>
        <TopSlider />
        <div className="my-4 sm:flex flex-row items-center gap-2 w-full lg:pr-16 hidden">
          <label className="relative block w-full">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <CiSearch className="h-5 w-5 fill-slate-300" />
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block text-white bg-[#152436] w-full rounded-md py-2 pl-9 pr-3 shadow-sm outline-none sm:text-sm"
              placeholder="Search"
              type="text"
              name="search"
            />
          </label>
          <button className="p-2.5 w-fit bg-[#152436] rounded-md">
            <FaStar className="text-slate-400" />
          </button>
        </div>
        <div className="flex gap-3 mb-3 mt-3 sm:mt-0 overflow-x-auto scrollbar-hide lg:hidden">
          {menuBannerBottom.map((menuBottom) => (
            <MobileBannerBottom
              key={menuBottom.img}
              title={menuBottom?.title}
              img={menuBottom.img}
            />
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <PopularCategory />
          <RabetExclusive />
          <NewGames />
          <LiveGames />
          <SlotsGame />
          <CrashGames />
          <LocalGames />
          <FastGames />
          <RouletteGames />
          <BaccaratGames />
          <BlackJackGames />
          <TableGames />
          <VirtualSports />
          <OtherGames />
        </div>
      </div>
    </div>
  );
};

export default AllGames;
