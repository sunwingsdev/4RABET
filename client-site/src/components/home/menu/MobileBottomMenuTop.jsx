import { Link } from "react-router";

const MobileBottomMenuTop = ({ img, title, link }) => {
  return (
    <div className="flex-none w-16 h-16 text-center">
      <Link to={link}>
        <div className="text-center text-xs font-bold text-white py-3 px-3 rounded-md duration-300">
          <img className="w-auto h-auto m-auto" src={img} alt="" />
          <p className="mt-1">{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default MobileBottomMenuTop;
