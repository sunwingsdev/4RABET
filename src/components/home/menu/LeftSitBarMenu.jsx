import { Link } from "react-router";
import menu1 from "../../../assets/menu/1.png";
import { leftSideMenu } from "../../MenuItems";

const LeftSitBarMenu = () => {
  return (
    <div className="pt-16 pb-8">
      <h2 className="p-6 text-sm font-bold text-white">Categories</h2>
      <div className="text-[#859cba] text-base font-semibold">
        {leftSideMenu?.map((item) => (
          <Link key={item?.id} to={item?.link}>
            <div className="flex items-center gap-1 py-1 px-4 hover:bg-[#18263AE6] border-l-2 border-[#0d1827] hover:border-[#0077f1] duration-300">
              <img className="w-10" src={menu1} alt="" />
              <p>{item?.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSitBarMenu;
