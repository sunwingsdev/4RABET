import { Link } from "react-router";
import { leftSideMenuTop } from "../MenuItems";
import MobileBottomMenuTop from "../home/menu/MobileBottomMenuTop";

const ScrollContent = () => {
  return (
    <div className="flex items-center justify-center gap-3 text-white overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 w-[99%] h-20">
      {leftSideMenuTop?.map((menuBottom) => (
        <Link
          className="flex flex-col items-center min-w-[80px] text-center"
          key={menuBottom?.id}
          to={menuBottom?.link}
        >
          <img className="w-12 h-12" src={menuBottom?.Icon} alt="" />
          <p className="text-xs">{menuBottom?.label}</p>
        </Link>
      ))}
    </div>
  );
};

export default ScrollContent;
