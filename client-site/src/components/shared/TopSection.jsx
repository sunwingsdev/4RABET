import { CiSearch } from "react-icons/ci";
import TopSlider from "../all-games/TopSlider";
import { FaStar } from "react-icons/fa6";
import { leftSideMenu } from "../MenuItems";
import MobileBannerBottom from "../home/menu/MobileBannerBottom";
import MobileBottomMenuTop from "../home/menu/MobileBottomMenuTop";
import { leftSideMenuTop } from "../MenuItems";
const TopSection = () => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-col">
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
      </div>

      <div className="flex gap-3 mb-3 mt-3 w-[1920px] overflow-x-auto scrollbar-hide bg-[#282828] lg:pr-16">
        {leftSideMenuTop?.map((menuBottom) => (
          <MobileBottomMenuTop
            key={menuBottom.id}
            title={menuBottom?.label}
            img={menuBottom.Icon}
            link={menuBottom.link}
          />
        ))}
      </div>

      <div className="flex gap-3 mb-3 mt-3 sm:mt-0 overflow-x-auto scrollbar-hide lg:hidden">
        {leftSideMenu?.map((menuBottom) => (
          <MobileBannerBottom
            key={menuBottom.id}
            title={menuBottom?.label}
            img={menuBottom.Icon}
            link={menuBottom.link}
          />
        ))}
      </div>
    </>
  );
};

export default TopSection;
