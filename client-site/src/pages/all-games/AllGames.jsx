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

const AllGames = () => {
  return (
    <div className="bg-[#091222] pt-14 mt-[51px] lg:mt-0">
      <div className="bg-[#1c2d44] flex flex-row items-center gap-2 py-2 px-6 lg:p-6">
        <FaGamepad className="text-3xl text-white" />{" "}
        <p className="text-lg xl:text-3xl text-white font-bold">All Games</p>
      </div>
      <div className="p-4">
        <TopSlider />
        <div className="my-4 flex flex-row items-center gap-2 w-full lg:pr-16">
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
