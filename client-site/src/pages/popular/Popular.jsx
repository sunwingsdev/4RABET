import { GiGamepad } from "react-icons/gi";
import TopSlider from "../../components/all-games/TopSlider";
import { CiSearch } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import popularImg from "../../assets/images/icons/popular.png";
import { gamesData } from "../../components/shared/GamesData";
import Games from "../../components/shared/Games";
import { FaGamepad } from "react-icons/fa";
import MobileBannerBottom from "../../components/home/menu/MobileBannerBottom";

const Popular = () => {
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
        <div>
          <div className="flex flex-row items-center gap-1 mb-4">
            <img
              src={popularImg}
              className="w-10 h-10"
              alt="popular category image"
            />
            <h1 className="text-lg font-bold text-white">Popular</h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-y-4 gap-x-2 lg:pr-16">
            {gamesData?.map((game) => (
              <Games key={game.id} img={game.img} title={game.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
