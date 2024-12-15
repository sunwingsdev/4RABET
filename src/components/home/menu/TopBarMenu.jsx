import { Link } from "react-router";
import logo from "../../../assets/logo.svg";
import flag from "../../../assets/EN.svg";
import { topMenu } from "../../MenuItems";

const TopBarMenu = () => {
  return (
    <div className="flex justify-between items-center gap-10 bg-[#18263AE6] border-b border-[#293b55]">
      <div className="flex items-center gap-16">
        <div className="pl-3 flex items-center gap-2">
          <Link to={"/"}>
            <img className="w-44" src={logo} alt="" />
          </Link>
          <Link to={"/"}>
            <img
              className="w-7 rounded-md object-cover"
              src="https://ifrd.4rabetsite25.com/img/svgflags/BN.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="flex gap-6 text-white font-bold text-base">
          {topMenu.map((menu) => (
            <Link key={menu.id} to={menu.link}>
              <p className="py-4 border-b-2 hover:text-[#1976d2] border-[#18263AE6] hover:border-[#1976d2] duration-300">
                {menu.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-white pl-6 border-l border-[#293b55]">
          <Link>
            <p className="text-sm font-bold px-6 py-2 rounded-full bg-[#2B81D6] hover:bg-[#4ba2f8] duration-300">
              SIGN IN
            </p>
          </Link>
          <Link>
            <p className="text-sm font-bold px-6 py-2 rounded-full bg-[#F44336] hover:bg-[#cf4137] duration-300">
              REGISTRATION
            </p>
          </Link>
        </div>

        <div className="text-white border-l border-[#293b55]">
          <Link>
            <img
              className="p-4 px-5 w-16 h-14 rounded-full object-cover"
              src={flag}
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBarMenu;
