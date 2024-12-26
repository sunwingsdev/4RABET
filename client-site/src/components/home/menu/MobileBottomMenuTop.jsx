import { Link } from "react-router";

const MobileBottomMenuTop = ({ img, title, link }) => {
  return (
    <Link className="" to={link}>
      <div className="text-center text-xs font-bold text-white py-3 px-3 rounded-md duration-300 flex-none">
        <img className="w-auto h-auto m-auto" src={img} alt="" />
        <p className="mt-1 whitespace-nowrap">{title}</p>
      </div>
    </Link>
  );
};

export default MobileBottomMenuTop;
