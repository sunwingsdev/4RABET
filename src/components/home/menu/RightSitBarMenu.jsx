import { Link } from "react-router";
import rightMenu from "../../../assets/menu/r-1.svg";

const RightSitBarMenu = () => {
  return (
    <div className="pt-20">
      <div className="text-[#859cba] text-sm font-semibold">
        <Link>
          <div className="group">
            <img className="w-8 m-auto" src={rightMenu} alt="" />
            <p className="text-center mt-1">Cricket</p>
            <div className="pt-2 h-1 w-6 m-auto border-b-2 border-[#182539] group-hover:border-white  duration-300"></div>
          </div>
        </Link>
        <Link>
          <div className="group mt-5">
            <img className="w-8 m-auto" src={rightMenu} alt="" />
            <p className="text-center mt-1">Cricket</p>
            <div className="pt-2 h-1 w-6 m-auto border-b-2 border-[#182539] group-hover:border-white  duration-300"></div>
          </div>
        </Link>
        <Link>
          <div className="group mt-5">
            <img className="w-8 m-auto" src={rightMenu} alt="" />
            <p className="text-center mt-1">Cricket</p>
            <div className="pt-2 h-1 w-6 m-auto border-b-2 border-[#182539] group-hover:border-white  duration-300"></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RightSitBarMenu;
