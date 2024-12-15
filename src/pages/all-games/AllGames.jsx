import TopSlider from "../../components/all-games/TopSlider";
import { CiSearch } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import PopularCategory from "../../components/all-games/PopularCategory";

const AllGames = () => {
  return (
    <div className="bg-[#091222]">
      <TopSlider />
      <div className="my-4 flex flex-row items-center gap-2 w-full">
        <label className="relative block w-full">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <CiSearch className="h-5 w-5 fill-slate-300" />
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-[#152436] w-full rounded-md py-2 pl-9 pr-3 shadow-sm outline-none sm:text-sm"
            placeholder="Search"
            type="text"
            name="search"
          />
        </label>
        <button className="p-2.5 w-fit bg-[#152436] rounded-md">
          <FaStar className="text-slate-400" />
        </button>
      </div>

      <PopularCategory />
    </div>
  );
};

export default AllGames;
