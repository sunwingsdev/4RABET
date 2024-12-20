import { GiBullseye } from "react-icons/gi";
import TopSlider from "../../components/all-games/TopSlider";
import { CiSearch } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import rouletteGamesImg from "../../assets/menu/10.png";
import { gamesData } from "../../components/shared/GamesData";
import Games from "../../components/shared/Games";

const RouletteGames = () => {
  return (
    <div className="bg-[#091222] pt-14 mt-[51px] lg:mt-0">
      <div className="bg-[#1c2d44] flex flex-row items-center gap-2 py-2 px-6 lg:p-6">
        <GiBullseye className="text-3xl text-white" />{" "}
        <p className="text-lg xl:text-3xl text-white font-bold">Roulette</p>
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
        <div>
          <div className="flex flex-row items-center gap-1 mb-4">
            <img
              src={rouletteGamesImg}
              className="w-10 h-10"
              alt="roulette games image"
            />
            <h1 className="text-lg font-bold text-white">Roulette</h1>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {gamesData?.map((game) => (
              <Games key={game.id} img={game.img} title={game.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouletteGames;
