import { Link } from "react-router";
import menu1 from "../../../assets/menu/1.png";

const LeftSitBarMenu = () => {
  return (
    <div className="pt-16 pb-8">
      <h2 className="p-6 text-sm font-bold text-white">Categories</h2>
      <div className="text-[#859cba] text-base font-semibold">
        <Link>
          <div className="flex items-center gap-1 py-1 px-4 hover:bg-[#18263AE6] border-l-2 border-[#0d1827] hover:border-[#0077f1] duration-300">
            <img className="w-10" src={menu1} alt="" />
            <p>All Games</p>
          </div>
        </Link>
        <Link>
          <div className="flex items-center justify-between gap-1 group py-1 px-4 hover:bg-[#18263AE6] border-l-2 border-[#0d1827] hover:border-[#0077f1] duration-300">
            <div className="flex items-center">
              <img className="w-10" src={menu1} alt="" />
              <p>All Games</p>
            </div>
            <p className="text-xs font-semibold group-hover:text-white">144</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LeftSitBarMenu;
