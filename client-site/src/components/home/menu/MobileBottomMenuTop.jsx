import { Link } from "react-router";

const MobileBottomMenuTop = ({ img, title, link }) => {
  return (
    <div>
      <Link to={link}>
        <div className="text-center w-full text-sm font-bold text-white py-2 px-4 rounded-md border border-[#FFFFFF0A] hover:border-[#FFFFFF26] bg-[#FFFFFF0A] hover:bg-[#60748D33] duration-300">
          <img className="size-6 m-auto" src={img} alt="" />
          <p className="whitespace-nowrap text-center">{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default MobileBottomMenuTop;
